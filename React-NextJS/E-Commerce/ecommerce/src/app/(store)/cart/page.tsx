'use client';
import AreaItemCart from "@/components/cart/AreaItemCart";
import Page from "@/components/template/Page";
import useCart from "@/data/hooks/useCart";

export default function CartPage() {
   const { items } = useCart();
   
   return (
      <Page>
         {items.map((item) => (
            <AreaItemCart key={item.product.id} item={item} />
         ))}
      </Page>
   )
};