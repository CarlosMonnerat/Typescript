import Topo from "@/components/Topo";
import Card from "@/components/Card";

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
        <Card produto={'Mouse'} valor={'R$49,90'}/> 
        <Card produto={'Teclado'} valor={'R$69,90'}/> 
        <Card produto={'Monitor'} valor={'R$459,90'}/>  
        <Card produto={'CPU'} valor={'R$799,90'}/>  
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