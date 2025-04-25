import Topo from "@/components/Topo";
import { run } from "node:test";
import { useState } from "react"

const cursos = ["HTML","React","C++","JavaScript","Arduino","CSS"];

export default function inputs(){
   const [nome, setNome] = useState<string>("");
   const [curso, setCurso] = useState<string>(cursos[0]);

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

            <div>Nome Digitadoo: {nome}</div>
            <div>Curso escolhido: {curso}</div>
         </div>
      </div>   
   )
}