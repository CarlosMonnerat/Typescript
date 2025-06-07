import Product from "@/data/model/Product";
import Image from 'next/image';

export interface ProductCardProps {
   product: Product;
};

export default function ProductCard(props: ProductCardProps) {
   const { id, name, description, price, image} = props.product;

   return (
      <div className="flex flex-col w-72 bg-zinc-800">
         <div className="relative w-72 h-52">
            <Image src={image} alt={name} fill className="object-cover" />
         </div>
         <div className="flex flex-col gap-4 p-5 flex-1  text-amber-100">
            <h2 className="text-xl font-bold ">{name}</h2>
            <p className="flex-1 text-sm">{description}</p>
            <div className="flex justify-between items-center">
               <span className="text-lg font-semibold mt-2">R${price.toFixed(2)}</span>
               <button className="border rounded-full px-4 py-2">Adicionar</button>
            </div>
         </div>
      </div>
   )
};