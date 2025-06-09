import itemCart from "@/data/model/ItemCart";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";

export interface AreaItemCartProps {
   item: itemCart;
};

export default function AreaItemCart(props: AreaItemCartProps){
   return(
      <div className="flex items-center gap-5 bg-zinc-900 rounded-md  overflow-hidden">
         <div className="relative w-28 h-28">
            <Image
               src={props.item.product.image}
               alt={props.item.product.name}
               fill
               className="object-cover"
            />
         </div>
         <div className="flex flex-col justify-center flex-1 ">
               <span className="text-xl text-cyan-50 font-bold">
                  {props.item.product.name}
               </span>
         </div>
         <div className="flex gap-2 items-center px-5">
            <button onClick={() => {}}>
               <IconMinus className="text-cyan-50"/>
            </button>
            <span className="flex px-4 py-2 rounded-md bg-cyan-50">
               {props.item.quantity}
            </span>
            <button onClick={() => {}}>
               <IconPlus className="text-cyan-50"/>
            </button>
         </div>

      </div>
   )
};