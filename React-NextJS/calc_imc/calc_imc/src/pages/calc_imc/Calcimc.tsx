import { useState } from "react";
import Form from "@/components/Form";
import Tabelaimc from "@/components/Tabelaimc";

export default function Calcimc () {
   const [peso, setPeso] = useState<number>(0);
   const [altura, setAltura] = useState<number>(0);
   const [imc, setImc] = useState<number>();

   function Calcular () {
      let res = peso / (altura * altura);
      setImc(res);
   };

   return (
      <div>
         <p>Cálculo do IMC</p>
         <Form label = "Peso" state={peso} funcState={setPeso}/>
         <Form label = "Altura" state={altura} funcState={setAltura}/>
         <button onClick={Calcular}>Calcular</button>
         <p>Resultado: {imc}</p>
         <Tabelaimc/>
      </div>
   )
};