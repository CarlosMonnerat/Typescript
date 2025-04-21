import Topo from "@/components/Topo";
import Card from "@/components/Card";
import { useRouter } from "next/router";

function calcDesc(v: number, d: number){
   return v - d;
}

function calcDesc2(v: number, d: number){
   return v - (d/2);
}

const produtos = [
   {
     id: 1, 
     produto: 'Mouse',
     valor: 49.90,
     desconto: 0,
     disponivel: true
   },
   {
     id: 2, 
     produto: 'Teclado',
     valor: 69.90,
     desconto: 10,
     disponivel: true
   },
   {
     id: 3, 
     produto: 'Monitor',
     valor: 659.90,
     desconto: 0,
     disponivel: true
   },
   {
     id: 4,
     produto: 'CPU',
     valor: 829.90,
     desconto: 100,
     disponivel: true
   },
   {
     id: 5,
     produto: 'Caixa de Som',
     valor: 39.90,
     desconto: 0,
     disponivel: true
   },
   {
     id: 6,
     produto: 'Microfone',
     valor: 65.90,
     desconto: 0,
     disponivel: true
   }
];

export default function ProdutosPagina(){
   const router = useRouter()
   //const nome = router.query.nome;
   //const curso = router.query.curso;
   const {nome, curso} = router.query;
   console.log(nome);
   console.log(curso);
   return(
      <div>
         <Topo/>
         <div className='flex justify-center gap-3'>
            {
               produtos.map( (e: any) => {
                  if(e.disponivel){
                  return(
                     <Card key={e.id} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc}>
                        <div>Teste de componente filho</div>
                     </Card>
                  )}
               })
            } 
         </div>    
      </div>
      
   );       
}