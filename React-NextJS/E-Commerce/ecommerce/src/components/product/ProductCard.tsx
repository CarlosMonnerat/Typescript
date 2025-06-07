import Product from "@/data/model/Product";
import Image from 'next/image';

export interface ProductCardProps {
   product: Product;
};

export default function ProductCard(props: ProductCardProps) {
   const { id, name, description, price, image} = props.product;

   return (
      <div className="flex flex-col w-72">
         <div className="relative w-72 h-52">
            <Image src={image} alt={name} fill />
         </div>
      </div>
   )
};