import { useState, useEffect } from "react"
import Topo from "@/components/Topo"

export default function UseEffect(){
   const [cont, setCont] = useState<number>(0);

   useEffect(()=>{

   });

   function add(){
      let c = cont;
      c++;
      setCont(c);
   }

   return(
      <div>
         <Topo/>
         <h1>Página useEffect</h1>
         <div>
            <p>{`Valor de cont: ${cont}`}</p>
            <button className="btnPadrão" onClick={add}>Adicionar</button>
         </div>   
      </div>
   )
};