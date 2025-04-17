export default function Topo(){
    const nome = 'Carlos Quintanilha';
    let canal = 'CFBCursos';
    return (
    <div className='flex justify-between items-center bg-zinc-300 h-[100px]'>
        <div>Logo</div>
        <div className='flex flex-col justify-center items-center'>
            <div className='text-3xl'>{canal}</div>
            <div className="subtitulo-topo">Curso de React</div>    
        </div>
        <div>{nome}</div>
    </div>

    );
}