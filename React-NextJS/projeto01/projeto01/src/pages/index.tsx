import Topo from "@/components/Topo";
import Card from "@/components/Card";

function calcDesc(v: number, d: number){
  return v - d;
}

function calcDesc2(v: number, d: number){
  return v - (d/2);
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
      <div className='flex justify-center gap-3'>
        <Card produto={'Mouse'} valor={49.90} desconto={10} funcao={calcDesc}/> 
        <Card produto={'Teclado'} valor={69.90} desconto={0} funcao={calcDesc}/> 
        <Card produto={'Monitor'} valor={459.90} desconto={5} funcao={calcDesc2}/>  
        <Card produto={'CPU'} valor={799.90} desconto={50} funcao={calcDesc2}/>  
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