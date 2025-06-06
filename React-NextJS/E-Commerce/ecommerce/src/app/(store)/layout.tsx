import ProviderCart from "@/data/context/cartContext";

export default function Layout(props: any) {
   return(
      <ProviderCart>
         <div className="border-3 border-blue-900">
            {props.children}
         </div>
      </ProviderCart>
   )
};