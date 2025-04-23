interface DisplayStateProps{
   valor: number
   add: any,
   rem: any
}

export default function DisplayState(props: DisplayStateProps){
   return(
      <div>
         <div>
            {props.valor}
         </div>
         <div className="flex gap-5">
            <button className="btnPadrão" onClick={props.add}>Adicionar</button>
            <button className="btnPadrão" onClick={props.rem}>Remover</button>
         </div> 
      </div>
   )
}