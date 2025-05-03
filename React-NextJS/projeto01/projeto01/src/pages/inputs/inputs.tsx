import Topo from "@/components/Topo"
import Globais from "@/components/Globais"
import { useState, useEffect } from "react"

const cursos = ["HTML","React","C++","JavaScript","Arduino","CSS"];

export default function inputs(){
   const [nome, setNome] = useState<string>("");
   const [curso, setCurso] = useState<string>(cursos[0]);

   useEffect(()=>{
      Globais.curso = "React";
   });

   function fcursos(){
      return cursos.map((c: any)=>{
         return <option value={c}>{c}</option>
      })
   }

   return(
      <div>
         <Topo/>
         <div className="m-2.5">
            <div className="campoForm">
                  <label>Nome</label>
                  <input type="text" value={nome} onChange={(evt) => setNome(evt.target.value)}/>
            </div>
            <div className="campoForm">
               <label>Curso</label>
               <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
                 {
                     fcursos()
                 }
               </select>
            </div>

            <div>Nome Digitado: {nome}</div>
            <div>Curso escolhido: {curso}</div>
            <div>
               {<p>{Globais.canal}</p>}
               {<p>{Globais.curso}</p>}
               {<p>{Globais.ano}</p>}
            </div>
         </div>
      </div>   
   )
}