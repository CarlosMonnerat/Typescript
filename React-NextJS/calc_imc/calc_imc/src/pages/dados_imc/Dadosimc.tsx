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
         <div className='flex flex-col justify-center items-center bg-amber-200'>
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
         <div>
            GRID
         </div>
         
      </div>
   )
};