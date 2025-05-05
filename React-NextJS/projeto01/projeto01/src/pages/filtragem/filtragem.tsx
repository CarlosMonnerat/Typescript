import Topo from "@/components/Topo"
import { useState, useEffect } from "react"

const carros = [
   {id: 0, categoria: "Esporte", valor: "120000.00", modelo:'Golf GTI'},
   {id: 1, categoria: "Esporte", valor: "200000.00", modelo:'Camaro'},
   {id: 2, categoria: "SUV", valor: "100000.00", modelo:'HRV'},
   {id: 3, categoria: "SUV", valor: "100000.00", modelo:'T-Cross'},
   {id: 4, categoria: "Utilitario", valor: "180000.00", modelo:'Hillux'},
   {id: 5, categoria: "Utilitario", valor: "160000.00", modelo:'Ranger'},
]

//let carros2: any = '';
 
export default function filtragem(){
   const [categ, setCateg] = useState<string>('');
   const [linhas, setLinhas] = useState<any>([]);

//Fazendo a filtragem de dados vindo de uma API
   // useEffect(() =>{
   //    fetch('http://127.0.0.1:1880/carros_API') //Endpoint não criado
   //    .then(res => res.json())
   //    .then(res =>{
   //       carros2 = res;
   //    });
   // },[]);

   function criarLinhas(cat: any){
      setCateg(cat);
      let l: any = [];
      carros.forEach((c: any) => {
         if(c.categoria == cat){
            l.push(
               <div className="flex flex-row w-[500px]" key={c.id}>
                  <div className="w-full">{c.categoria}</div>
                  <div className="w-full">{c.valor}</div>
                  <div className="w-full">{c.modelo}</div>
               </div>
            )
         }
      })
      setLinhas(l);
   };

   return(
      <div>
         <Topo/>

         <h1>Página Filtragem</h1>
         <label>Selecionar a categoria</label>
         <select value={categ} onChange={(evt) => {criarLinhas(evt.target.value)}}>
            <option value = ''>Nenhum</option>
            <option value = 'Esporte'>Esporte</option>
            <option value = 'SUV'>SUV</option>
            <option value = 'Utilitario'>Utilitário</option>
         </select>

         <div className="flex flex-col">
            <div className="flex flex-row w-[500px]">
               <div className="w-full">Categoria</div>
               <div className="w-full">Valor</div>
               <div className="w-full">Modelo</div>
            </div>
            {linhas}
         </div>
      </div>
   )
};

