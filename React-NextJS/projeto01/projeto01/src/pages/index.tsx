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

const nome = 'Carlos Quintanilha'
let canal = 'CFBCursos'

export default function Home() {
  function retnome(){
    return nome
  }
  
  return (
    <main>
      <div>{retnome()}</div>
      <div>{canal}</div>
      <div>Curso de React</div>
      <div>TypeScript</div>
      <div>Next jS</div>
    </main>
  );
}
