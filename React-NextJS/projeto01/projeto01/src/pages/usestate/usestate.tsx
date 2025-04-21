import { useState } from "react"

export default function usestate(){
   let [cont, setCont] = useState<number>(0)

   function contador(){
      setCont(cont++);
   }


   return(
      <div>
         Página useState!!!
         <div>{cont}</div>
         <button onClick={contador}>Add</button>
      </div>
   )
   
}