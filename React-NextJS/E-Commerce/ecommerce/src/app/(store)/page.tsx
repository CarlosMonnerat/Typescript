'use client'
import Page from "@/components/template/Page";
import cartContext from "@/data/context/cartContext";
import { useContext } from "react";

export default function Home() {
  const { number } = useContext(cartContext);
  return (
    <Page>
      <div>Início da Aplicação</div>
      <div>Numero: {number}</div>
    </Page>
  );
}
