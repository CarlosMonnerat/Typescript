import { useState, useEffect } from "react"
import Topo from "@/components/Topo"
import Globais from "@/components/Globais"

export default function UseEffect(){ 
   const [aux, setAux] = useState<number>(0);

   useEffect(()=>{   //O useEffect é chamado toda vez que há uma renderização na página
      alert('UseEffect disparado');
      Globais.canal = "CFB Drone";
      Globais.curso = "TypeScript";
      Globais.ano = "2099";
   },[]);   //'aux' é uma dependencia do 'useEffect', ou seja toda vez que 'aux' for alterado, irá chamar o 'use effect'
               // Ao passar um array vazio, dizemos para o useEfect rodar apenas uma vez.

   function add(){
      let a = aux;
      a++;
      setAux(a);
   };

   return(
      <div>
         <Topo/>
         <h1>Página useEffect</h1>
         <div>
            <p>{`Valor de aux: ${aux}`}</p>
            <button className="btnPadrão" onClick={add}>Adicionar</button>
         </div>
         <div>
            {<p>{Globais.canal}</p>}
            {<p>{Globais.curso}</p>}
            {<p>{Globais.ano}</p>}
         </div>   
      </div>
   )
};