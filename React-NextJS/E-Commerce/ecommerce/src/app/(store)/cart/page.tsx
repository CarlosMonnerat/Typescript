'use client'
import Page from "@/components/template/Page";
import cartContext from "@/data/context/cartContext";
import { useContext, useState } from "react";

export default function CartPage() {
   const { number} = useContext(cartContext);

   return (
      <Page>
         Carrinho: {number}
      </Page>
   )
};