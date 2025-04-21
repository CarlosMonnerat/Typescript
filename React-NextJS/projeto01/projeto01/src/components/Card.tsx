interface CardProps{
    produto: string,
    valor: number,
    desconto: number,
    funcao: any,
    children: any
}

export default function Card(props: CardProps){
    return(
        <div className={`flex flex-col justify-center border-4 ${props.desconto > 0 ? 'border-red-700' : 'border-blue-700'} rounded-sm p-1`}>
            <div>Produto: {props.produto}</div>
            <div>Valor: R${props.valor}</div>
            {props.desconto > 0 && (
                <div>
                    <div>Desconto: R${props.desconto}</div>
                    <div>Preço de venda: R${props.funcao(props.valor, props.desconto)}</div>
                </div>
            )}
            <div className='bg-blue-800 text-blue-50'>{props.children}</div>    
        </div>
    );
}