import Link from "next/link";

export default function Topo(){
    return (
    <div className='flex flex-col justify-between items-center bg-zinc-300 h-[135px]'>
        <div>Logo</div>
            <div className='flex flex-col justify-center items-center'>
            <div className='text-3xl'>CfB Cursos</div>
            <div className="subtitulo-topo">Curso de React</div>    
        </div>
        <nav>
            <Link href={"/"}>
                Home
            </Link>
            <Link href={ 
                {
                    pathname: "/produtos/produtos",
                    query: {
                        nome: 'Carlos', curso: 'React Next'
                    }
                }
            }>
                Produtos
            </Link>
            <Link href={"/teste/test"}>
                Teste
            </Link>
        </nav>
    </div>

    );
}35