'use client'
import Page from "@/components/template/Page";
import useCart from "@/data/hooks/useCart";

export default function CartPage() {
   const { number} = useCart();

   return (
      <Page>
         Carrinho: {number}
      </Page>
   )
};