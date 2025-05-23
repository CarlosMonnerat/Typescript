import Link from "next/link";

export default function Topo(){
    return (
        <div className='flex flex-col justify-between items-center bg-zinc-300 h-[135px]'>
            <div>Logo</div>
                <div className='flex flex-col justify-center items-center'>
                <div className='text-3xl'>CfB Cursos</div>
                <div className="subtitulo-topo">Curso de React</div>    
            </div>
            <nav className="flex gap-5">
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={ 
                    {
                        pathname: "/produtos/Produtos",
                        query: {
                            nome: 'Carlos', curso: 'React Next'
                        }
                    }
                }>
                    Produtos
                </Link>
                <Link href={"/teste/Test"}>
                    Teste
                </Link>
                <Link href={"/usestate/Usestate"}>
                    useState
                </Link>
                <Link href={"/inputs/Inputs"}>
                    Inpus
                </Link>
                <Link href={"/useEffect/UseEffect"}>
                    useEffect
                </Link>
                <Link href={"/filtragem/Filtragem"}>
                    Filtragem
                </Link>
            </nav>
        </div>
    )
};