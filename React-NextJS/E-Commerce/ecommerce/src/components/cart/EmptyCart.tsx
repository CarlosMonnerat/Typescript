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
         <Link href="/" className="bg-zinc-800 rounded-xl px-3 py-2">
               Ver produtos
         </Link>
      </div>
   )
};