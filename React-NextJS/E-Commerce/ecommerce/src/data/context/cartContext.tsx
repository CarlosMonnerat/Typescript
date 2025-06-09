import { createContext, useState } from "react";
import itemCart from "../model/ItemCart";
import Product from "../model/Product";

interface cartContextProps {
   items: itemCart[];
   toAdd: (item: Product) => void   
};

const cartContext = createContext<cartContextProps>({} as any);

export function ProviderCart(props: any) {
   const [items, setItems] = useState<itemCart[]>([]);

   function toAdd(product: Product) {
      const index = items.findIndex((i) => i.product.id === product.id);
      if(index === -1) {
         setItems([...items, { product, quantity: 1 }]);
      }else {
         const newItems = [...items];
         newItems[index].quantity++;
         setItems(newItems);
      };
   };
   
   return(
      <cartContext.Provider value={{
         items,
         toAdd,
      }}>
         {props.children}
      </cartContext.Provider>
   )
};

export default cartContext;