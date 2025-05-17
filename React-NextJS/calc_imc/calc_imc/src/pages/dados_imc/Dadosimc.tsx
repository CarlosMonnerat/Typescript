import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Dadosimc () {
   const router = useRouter();
   const {p_peso, p_altura, p_imc} = router.query;

   const [nome, setNome] = useState<any>('');
   const [peso, setPeso] = useState<any>('');
   const [altura, setAltura] = useState<any>('');
   const [imc, setImc] = useState<any>('');
   const [data, setData] = useState<any>('');

   useEffect(() =>{
      setPeso(p_peso);
      setAltura(p_altura);
      setImc(p_imc);
      setData('2025-05-17');
   },[]);
   
   return (
      <div>
         <div className='flex flex-col justify-center items-center border-2 ml-2.5 mr-2.5  bg-amber-200'>
            <div className='campoForm'>
               <label>Nome</label>
               <input className='inputDados' type='text' value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className='campoForm'>
               <label>Peso</label>
               <input className='inputDados' type='text' value={peso} readOnly/>
            </div>
            <div className='campoForm'>
               <label>Altura</label>
               <input className='inputDados' type='text' value={altura} readOnly/>
            </div>
            <div className='campoForm'>
               <label>IMC</label>
               <input className='inputDados' type='text' value={imc} readOnly/>
            </div>
            <div className='campoForm'>
               <label>Data</label>
               <input className='inputDados' type='text' value={data} readOnly/>
            </div>
            <div className='campoForm'>
               <button className="bg-indigo-900 w-full text-white mx-2 p-1 rounded-lg cursor-pointer">Gravar</button>
            </div>
         </div>
         <table className="flex flex-col gap-3 mt-2.5 mb-2 ml-2.5 mr-2.5">
            <caption className="w-full text-cente font-bold text-lg">Tabela com os Dados Salvos</caption>
            <thead>
               <tr className="flex ">
                  <th className="w-1/2">Nome</th>
                  <th className="w-1/2">Peso</th>
                  <th className="w-1/2">Altura</th>
                  <th className="w-1/2">IMC</th>
                  <th className="w-1/2">Data</th>
               </tr>
            </thead>
            <tbody>
               <tr className="flex bg-zinc-300 ">
                  <td className="w-1/2 p-0.5 text-center">nome 1</td>
                  <td className="w-1/2 p-0.5 text-center">peso 1</td>
                  <td className="w-1/2 p-0.5 text-center">altura 1</td>
                  <td className="w-1/2 p-0.5 text-center">imc 1</td>
                  <td className="w-1/2 p-0.5 text-center">data 1</td>
               </tr>
               <tr className="flex ">
                  <td className="w-1/2 p-0.5 text-center">nome 2</td>
                  <td className="w-1/2 p-0.5 text-center">peso 2</td>
                  <td className="w-1/2 p-0.5 text-center">altura 2</td>
                  <td className="w-1/2 p-0.5 text-center">imc 2</td>
                  <td className="w-1/2 p-0.5 text-center">data 2</td>
               </tr>
               <tr className="flex bg-zinc-300 ">
                  <td className="w-1/2 p-0.5 text-center">nome 3</td>
                  <td className="w-1/2 p-0.5 text-center">peso 3</td>
                  <td className="w-1/2 p-0.5 text-center">altura 3</td>
                  <td className="w-1/2 p-0.5 text-center">imc 3</td>
                  <td className="w-1/2 p-0.5 text-center">data 3</td>
               </tr>
                <tr className="flex ">
                  <td className="w-1/2 p-0.5 text-center">nome 4</td>
                  <td className="w-1/2 p-0.5 text-center">peso 4</td>
                  <td className="w-1/2 p-0.5 text-center">altura 4</td>
                  <td className="w-1/2 p-0.5 text-center">imc 4</td>
                  <td className="w-1/2 p-0.5 text-center">data 4</td>
               </tr>
            </tbody>
         </table>
         
         
      </div>
   )
};