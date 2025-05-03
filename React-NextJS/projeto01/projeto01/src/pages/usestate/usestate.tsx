import { useState } from "react"
import DisplayState from "@/components/DisplayState";
import Topo from "@/components/Topo";

export default function usestate(){
   const [cont, setCont] = useState<number>(0)

   return(
      <>
         <Topo/>
         <div className="flex flex-col items-center p-5">
            Página useState!!!
            <DisplayState valor={cont} func_state={setCont}></DisplayState>  
         </div>
      </>   
   )   
}