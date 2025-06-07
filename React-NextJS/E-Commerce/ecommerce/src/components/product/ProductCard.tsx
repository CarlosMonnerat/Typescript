import Product from "@/data/model/Product";
import Image from 'next/image';

export interface ProductCardProps {
   product: Product;
};

export default function ProductCard(props: ProductCardProps) {
   const { id, name, description, price, image} = props.product;

   return (
      <div className="flex flex-col w-72 bg-zinc-400">
         <div className="relative w-72 h-52">
            <Image src={image} alt={name} fill className="object-cover" />
         </div>
         <div className="flex-1">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="flex-1 text-sm text-zinc-900">{description}</p>
            <div className="flex justify-between items-center">
               <span className="text-lg font-semibold mt-2">R${price.toFixed(2)}</span>
               <button>Adicionar</button>
            </div>
         </div>
      </div>
   )
};