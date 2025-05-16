interface TabelaProps {
   imc: number;
};

export default function Tabelaimc (props: TabelaProps) {
   return (
      <table className="flex flex-col gap-3  mb-2">
         <caption className="w-full text-cente font-bold text-lg">Tabela com valores de referência:</caption>
         <thead>
            <tr className="flex ">
               <th className="w-1/2">Classificação</th>
               <th className="w-1/2">IMC</th>
            </tr>
         </thead>
         <tbody>
            <tr className={"flex bg-zinc-300 " + (props.imc > 0 && props.imc < 18.5 ? "destaque" : "")}>
               <td className="w-1/2 p-0.5 text-center">Abaixo do Peso</td>
               <td className="w-1/2 p-0.5 text-center">Menor que 18,5</td>
            </tr>
            <tr className={"flex " + (props.imc >= 18.5 && props.imc <= 24.9 ? "destaque" : "")}>
               <td className="w-1/2 p-0.5 text-center">Peso Normal</td>
               <td className="w-1/2 p-0.5 text-center">Entre 18,5 e 24,9</td>
            </tr>
            <tr className={"flex bg-zinc-300 " + (props.imc >= 25 && props.imc <= 29.9 ? "destaque" : "")}>
               <td className="w-1/2 p-0.5 text-center">Sobrepeso</td>
               <td className="w-1/2 p-0.5 text-center">Entre 25 e 29,9</td>
            </tr>
            <tr className={"flex " + (props.imc >= 30 && props.imc <= 34.9? "destaque" : "")}>
               <td className="w-1/2 p-0.5 text-center">Obesidade grau I</td>
               <td className="w-1/2 p-0.5 text-center">Entre 30 e 34,9</td>
            </tr>
            <tr className={"flex bg-zinc-300 " + (props.imc >= 35 && props.imc <= 39.9 ? "destaque" : "")}>
               <td className="w-1/2 p-0.5 text-center">Obesidade grau II</td>
               <td className="w-1/2 p-0.5 text-center">Entre 35 e 39,9</td>
            </tr>
            <tr className={"flex " + (props.imc > 39.9 ? "destaque" : "")}>
               <td className="w-1/2 p-0.5 text-center">Obesidade grau III</td>
               <td className="w-1/2 p-0.5 text-center">Maior que 39,9</td>
            </tr>
         </tbody>
      </table>
   )
};