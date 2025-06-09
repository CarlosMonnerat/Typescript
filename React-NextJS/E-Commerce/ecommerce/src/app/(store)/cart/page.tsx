'use client';
import AreaItemCart from "@/components/cart/AreaItemCart";
import Page from "@/components/template/Page";
import useCart from "@/data/hooks/useCart";

export default function CartPage() {
   const { items, toAdd } = useCart();
   
   return (
      <Page>
         <div className="flex flex-col gap-5">
            {items.map((item) => (
               <AreaItemCart 
                  key={item.product.id}
                  item={item}
                  toAdd={(item) => toAdd(item.product)}
               />
            ))}
         </div>
         
      </Page>
   )
};