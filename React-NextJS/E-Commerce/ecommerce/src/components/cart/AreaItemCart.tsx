import itemCart from "@/data/model/ItemCart"

export interface AreaItemCartProps {
   item: itemCart;
};

export default function AreaItemCart(props: AreaItemCartProps){
   return(
      <div>
         {props.item.product.name}
      </div>
   )
};