import Topo from "@/components/Topo";
import { useState } from "react"

export default function inputs(){
   const [nome, setNome] = useState<string>("");
   const [curso, setCurso] = useState<string>("");

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
                  <option value=""></option>
                  <option value="HTML">HTML</option>
                  <option value="React">React</option>
                  <option value="C++">C++</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Arduino">Arduino</option>
                  <option value="CSS">CSS</option>
               </select>
            </div>

            <div>Nome Digitadoo: {nome}</div>
            <div>Curso escolhido: {curso}</div>
         </div>
      </div>   
   )
}