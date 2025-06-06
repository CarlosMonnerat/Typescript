import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Cart() {
   return (
      <Link href = "/cart">
         <div className="flex relative">
            <IconShoppingCart size={32} stroke={1}/>
            <div className="absolute w-5 h-5 bg-red-600 rounded-full -top-2 -right-2 flex justify-center items-center text-xs">99</div>
         </div>
      </Link>
   )
};