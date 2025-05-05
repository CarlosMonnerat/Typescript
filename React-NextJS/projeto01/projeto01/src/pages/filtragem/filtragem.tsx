import Topo from "@/components/Topo"

const carros = [
   {id: 0, categ: 'Esporte', valor: '120000.00', modelo: 'Golf GTI'},
   {id: 1, categ: 'Esporte', valor: '200000.00', modelo: 'Camaro'},
   {id: 2, categ: 'SUV', valor: '100000.00', modelo: 'HRV'},
   {id: 3, categ: 'SUV', valor: '100000.00', modelo: 'T-Cross'},
   {id: 4, categ: 'Utilitario', valor: '180000.00', modelo: 'Hillux'},
   {id: 5, categ: 'Utilitario', valor: '160000.00', modelo: 'Ranger'}
];

export default function filtragem(){
   return(
      <div>
         <Topo/>
         <h1>Página Filtragem</h1>
         <div>

         </div>

      </div>
   )
};

