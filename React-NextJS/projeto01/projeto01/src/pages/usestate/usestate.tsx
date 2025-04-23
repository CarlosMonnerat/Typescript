import { useState } from "react"
import DisplayState from "@/components/DisplayState";

export default function usestate(){
   const [cont, setCont] = useState<number>(0)

   return(
      <div className="flex flex-col items-center p-5">
         Página useState!!!
         <DisplayState valor={cont} func_state={setCont}></DisplayState>  
      </div>
   )   
}