import Topo from "@/components/Topo";

export default function Home() {
  return (
    <div>
      <Topo/>
      <main style={testecss}>
        <div>Este é o main</div>
        <div>Página Home</div>
        <div style={{color: '#f00', backgroundColor:'#bbb', height: '50px'}}>Next jS</div>
      </main>
    </div>
  );
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'flex-center',
  gap: '50px',
  height: '100vh',
  color: '#00f',
  backgroundColor: '#ee0',
  fontSize: '20px',
  border: 'dashed'
}