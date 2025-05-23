interface DisplayStateProps{
   valor: number,
   func_state: any
}

export default function DisplayState(props: DisplayStateProps){

   function operacao(op: number){
      let novoValor = props.valor;
      novoValor += op;
      props.func_state(novoValor);
   }

   return(
      <div className=" bg-zinc-300 flex flex-col justify-center items-center p-5 m-2.5 rounded-md w-[300px]">
         <div className="bg-zinc-700 flex justify-center items-center p-1.5 mb-3 rounded-md w-[50px] text-green-300" >
            {props.valor}
         </div>
         <div className="flex gap-5">
            <button className="btnPadrão" onClick={() => operacao(1)}>Adicionar</button>
            <button className="btnPadrão" onClick={() => operacao(-1)}>Remover</button>
         </div> 
      </div>
   )
}