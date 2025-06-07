'use client';
import { ProviderCart } from "@/data/context/cartContext";

export default function Layout(props: any) {
   return(
      <ProviderCart>
         <div>
            {props.children}
         </div>
      </ProviderCart>
   )
};