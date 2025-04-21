import { useState } from "react"

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
         <div>{cont}</div>
         <button onClick={contador}>Add</button>
      </div>
   )
   
}