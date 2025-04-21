import { useState } from "react"
import DisplayState from "@/components/DisplayState";

export default function usestate(){
   const [cont, setCont] = useState<number>(0)

   function contador(){
      let novoValor = cont;
      novoValor++;
      setCont(novoValor);
   }


   return(
      <div>
         Página useState!!!
         <DisplayState>{cont}</DisplayState>
         <button onClick={contador}>Add</button>
      </div>
   )
   
}