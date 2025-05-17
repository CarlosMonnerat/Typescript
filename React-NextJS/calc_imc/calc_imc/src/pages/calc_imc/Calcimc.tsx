import { useState } from "react";
import Form from "@/components/Form";
import Tabelaimc from "@/components/Tabelaimc";
import Link from "next/link";

export default function Calcimc () {
   const [peso, setPeso] = useState<number>(0);
   const [altura, setAltura] = useState<number>(0);
   const [imc, setImc] = useState<number>(0);

   function Calcular () {
      if(altura * altura > 90) {
         let res = peso / ((altura * altura) / 10000);
         setImc(res);
      }else{
         let res = peso / (altura * altura);
         setImc(res);
      }
   };

   return (
      <div className="flex flex-col border-3 border-black w-[300px] gap-5 mt-5.5 rounded-lg bg-white">
         <p className="w-full text-center bg-indigo-900 font-bold text-lg rounded-tl-sm rounded-tr-sm text-white">Cálculo do IMC</p>
         <Form label = "Peso" state={peso} funcState={setPeso}/>
         <Form label = "Altura" state={altura} funcState={setAltura}/>
         <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={Calcular}>Calcular</button>
         <p className="bg-zinc-200 p-1">Resultado: {imc.toFixed(1)}</p>
         <Link className="bg-indigo-900 text-white mx-2 p-1 rounded-lg text-center cursor-pointer" href={{
            pathname: '/dados_imc/Dadosimc',
            query: {
               p_peso: peso,
               p_altura: altura,
               p_imc: imc
            } 
         }}>Dados IMC</Link>
         <Tabelaimc imc={imc}/>
      </div>
   )
};