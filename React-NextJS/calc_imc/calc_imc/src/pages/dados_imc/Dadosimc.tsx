import {useRouter} from 'next/router';

export default function Dadosimc () {
   const router = useRouter();
   const {p_peso, p_altura, p_imc} = router.query;
   console.log(p_peso)
   console.log(p_altura)
   console.log(p_imc)

   return (
      <div>
         Dados IMC
      </div>
   )
};