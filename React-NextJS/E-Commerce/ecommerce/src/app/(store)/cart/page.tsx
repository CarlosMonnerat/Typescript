'use client';
import AreaItemCart from "@/components/cart/AreaItemCart";
import EmptyCart from "@/components/cart/EmptyCart";
import TotalCart from "@/components/cart/TotalCart";
import Page from "@/components/template/Page";
import useCart from "@/data/hooks/useCart";
import Link from "next/link";

export default function CartPage() {
   const { items, toAdd, toRemove } = useCart();
   
   return (
      <Page className="flex flex-col gap-10">
         {items.length === 0 ? (
            <EmptyCart/>
         ) : (
            <>
               <div className="flex flex-col gap-5">
                  {items.map((item) => (
                     <AreaItemCart 
                        key={item.product.id}
                        item={item}
                        toAdd={(item) => toAdd(item.product)}
                        toRemove={(item) => toRemove(item.product)}
                     />
                  ))}
               </div>
               <Link href={"/"} className="font-bold text-red-600 text-center hover:text-green-800 hover:underline">Adicionar mais produtos</Link>
               <TotalCart items={items}/>
            </>
         )}  
      </Page>
   )
};