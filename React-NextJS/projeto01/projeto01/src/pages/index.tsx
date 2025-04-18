import Topo from "@/components/Topo";
import Card from "@/components/Card";

const produtos = [
  {
    produto: 'Mouse',
    valor: 49.90,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'Teclado',
    valor: 69.90,
    desconto: 10,
    disponivel: true
  },
  {
    produto: 'Monitor',
    valor: 659.90,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'CPU',
    valor: 829.90,
    desconto: 100,
    disponivel: true
  },
  {
    produto: 'Caixa de Som',
    valor: 39.90,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'Microfone',
    valor: 65.90,
    desconto: 0,
    disponivel: true
  }
];

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
        {
          produtos.map( (e: any) => {
            if(e.disponivel){
              return(
                <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc}/>
              )
            }
          })
        } 
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