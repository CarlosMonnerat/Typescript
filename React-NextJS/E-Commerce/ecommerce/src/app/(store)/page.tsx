'use client'
import Page from "@/components/template/Page";
import useCart from "@/data/hooks/useCart";

export default function Home() {
  const { number, increment, decrement } = useCart();

  return (
    <Page>
      <div>Início da Aplicação</div>
      <div>Numero: {number}</div>
      <button onClick={increment}>Adicionar</button>
      <button onClick={decrement}>Remover</button>
    </Page>
  );
}


