import { IconShoppingCartOff } from "@tabler/icons-react";
import Link from "next/link";

export default function EmptyCart() {
   return (
      <div className="flex flex-col items-center gap-4 text-cyan-50">
         <IconShoppingCartOff size={150} stroke={0.5}/>
         <div>
            <h2 className="text-3xl">Seu carrinho está vazio</h2>
            <p>Adicione produtos clicando no botão abaixo</p>
         </div>
         <Link href="/" className="bg-zinc-800 border-1 border-zinc-800 rounded-md px-4 py-2 hover:bg-zinc-900 hover:border-1 hover:border-white">
            Ver produtos
         </Link>   
      </div>
   )
};