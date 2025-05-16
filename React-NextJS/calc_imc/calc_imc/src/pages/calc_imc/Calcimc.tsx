import { useState } from "react";
import Form from "@/components/Form";
import Tabelaimc from "@/components/Tabelaimc";

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
      <div className="flex flex-col border border-black w-[300px] gap-5 bg-white">
         <p className="w-full text-center bg-indigo-900 font-bold text-lg text-white">Cálculo do IMC</p>
         <Form label = "Peso" state={peso} funcState={setPeso}/>
         <Form label = "Altura" state={altura} funcState={setAltura}/>
         <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={Calcular}>Calcular</button>
         <p className="bg-zinc-100 p-1">Resultado: {imc.toFixed(1)}</p>
         <Tabelaimc imc={imc}/>
      </div>
   )
};