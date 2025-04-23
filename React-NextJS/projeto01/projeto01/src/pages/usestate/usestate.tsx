import { useState } from "react"
import DisplayState from "@/components/DisplayState";

export default function usestate(){
   const [cont, setCont] = useState<number>(0)

   function adicionar(){
      let novoValor = cont;
      novoValor++;
      setCont(novoValor);
   }

   function remover(){
      let novoValor = cont;
      novoValor--;
      setCont(novoValor);
   }


   return(
      <div>
         Página useState!!!
         <DisplayState valor={cont} add={adicionar} rem={remover}></DisplayState>  
      </div>
   )
   
}