import { createContext, useState } from "react";
import itemCart from "../model/ItemCart";
import Product from "../model/Product";

interface cartContextProps {
   items: itemCart[];
   qtItems: number;
   toAdd: (item: Product) => void 
   toRemove: (item: Product) => void  
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

   function toRemove(product: Product){
      const newItems = items.map((i) => {
         if (i.product.id === product.id){
            i.quantity--;
         }
         return i;
      }).filter((i) => i.quantity > 0);
      setItems(newItems);
   };
   
   return(
      <cartContext.Provider
         value={{
            items,
            toAdd,
            toRemove,
            get qtItems() {
               return items.reduce((total, item) => total + item.quantity, 0);
            }
         }}>
         {props.children}
      </cartContext.Provider>
   )
};

export default cartContext;