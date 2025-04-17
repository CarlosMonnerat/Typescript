export default function Card(props: any){
    return(
        <div className='flex flex-col items-center border border-red-700 rounded-sm p-1'>
            <div>{props.produto}</div>
            <div>{props.valor}</div>
        </div>
    );
}