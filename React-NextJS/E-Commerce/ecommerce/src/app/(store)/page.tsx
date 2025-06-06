'use client'
import Page from "@/components/template/Page";
import cartContext from "@/data/context/cartContext";
import { useContext } from "react";

export default function Home() {
  const { number, increment, decrement } = useContext(cartContext);

  return (
    <Page>
      <div>Início da Aplicação</div>
      <div>Numero: {number}</div>
      <button onClick={increment}>Adicionar</button>
      <button onClick={decrement}>Remover</button>
    </Page>
  );
}
