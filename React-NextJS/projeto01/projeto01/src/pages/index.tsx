// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const nome = 'Carlos Quintanilha';
let canal = 'CFBCursos';

function Topo(){
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

export default function Home() {
  return (
    <main>
      <Topo/>
      <div style={testecss}>
        <div>Curso de React</div>
        <div>TypeScript</div>
        <div style={{color: '#f00', backgroundColor:'#bbb'}}>Next jS</div>
      </div>  
    </main>
  );
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  gap: '50px',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}