import itemCart from "@/data/model/ItemCart"

export interface TotalCartProps {
   items: itemCart[];
};

export default function TotalCart(props: TotalCartProps) {
   const total = props.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
   return (
      <div className="flex items-center justify-between bg-zinc-900 text-cyan-50 rounded-md p-7">
         <div className="flex flex-col justify-between">
            <span>Total</span>
            <span className="text-3xl font-bold text-green-500">R$ {total.toFixed(2)}</span>
         </div>
         <button className="bg-green-600 font-bold px-5 py-2 rounded-md cursor-pointer hover:bg-green-700 hover:border border-white">Finalizar</button>
      </div>
   )
};