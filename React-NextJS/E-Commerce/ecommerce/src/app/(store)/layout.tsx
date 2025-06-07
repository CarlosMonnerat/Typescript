'use client';
import { ProviderCart } from "@/data/context/cartContext";

export default function Layout(props: any) {
   return(
      <ProviderCart>
         <div className="border-5 border-red-500">
            {props.children}
         </div>
      </ProviderCart>
   )
};