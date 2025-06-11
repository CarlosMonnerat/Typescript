import { createContext, useEffect, useState } from "react";
import itemCart from "../model/ItemCart";
import Product from "../model/Product";
import useLocalStorage from "../hooks/useLocalStorage";
import { News_Cycle } from "next/font/google";

interface cartContextProps {
   items: itemCart[];
   qtItems: number;
   toAdd: (item: Product) => void 
   toRemove: (item: Product) => void  
};

const cartContext = createContext<cartContextProps>({} as any);

export function ProviderCart(props: any) {
   const [items, setItems] = useState<itemCart[]>([]);
   const { set, get } = useLocalStorage();

   useEffect(() => {
      const cart = get("cart");
      if(cart) {
         setItems(cart);
      };
   }, [get]);

   function toAdd(product: Product) {
      const index = items.findIndex((i) => i.product.id === product.id);
      if(index === -1) {
         changeItems([...items, { product, quantity: 1 }]);
      }else {
         const newItems = [...items];
         newItems[index].quantity++;
         changeItems(newItems);
      };
   };

   function toRemove(product: Product){
      const newItems = items.map((i) => {
         if (i.product.id === product.id){
            i.quantity--;
         }
         return i;
      }).filter((i) => i.quantity > 0);
      changeItems(newItems);
   };

   function changeItems(newItems: itemCart[]) {
      setItems(newItems);
      set('cart', newItems);
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