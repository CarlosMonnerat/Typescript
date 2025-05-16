import { useState } from "react";
import Form from "@/components/Form";

export default function Calcimc () {
   const [peso, setPeso] = useState<string>('');
   const [altura, setAltura] = useState<string>('');

   return (
      <div>
         <p>Cálculo do IMC</p>
         <Form label = "Peso" state={peso} funcState={setPeso}/>
         <Form label = "Altura" state={altura} funcState={setAltura}/>
      </div>
   )
};