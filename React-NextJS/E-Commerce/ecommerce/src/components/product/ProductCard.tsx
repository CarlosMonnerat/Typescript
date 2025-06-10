import useCart from "@/data/hooks/useCart";
import Product from "@/data/model/Product";
import Image from 'next/image';

export interface ProductCardProps {
   product: Product;
};

export default function ProductCard(props: ProductCardProps) {
   const { toAdd } = useCart();
   const { name, description, price, image} = props.product;

   return (
      <div className="flex flex-col w-72 rounded-lg bg-zinc-800">
         <div className="relative w-72 h-52">
            <Image src={image} alt={name} fill className="object-cover rounded-t-lg" />
         </div>
         <div className="flex flex-col gap-4 p-5 flex-1  text-amber-100">
            <h2 className="text-xl font-bold ">{name}</h2>
            <p className="flex-1 text-sm">{description}</p>
            <div className="flex justify-between items-center">
               <span className="text-lg text-amber-400 font-semibold mt-2">R${price.toFixed(2)}</span>
               <button onClick={() => toAdd(props.product)} className="border rounded-full px-5 py-2 text-sm cursor-pointer hover:bg-zinc-700">Adicionar</button>
            </div>
         </div>
      </div>
   )
};