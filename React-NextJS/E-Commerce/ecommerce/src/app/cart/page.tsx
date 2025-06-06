'use client'
import Page from "@/components/template/Page";
import { useState } from "react";

export default function CartPage() {
   const [num, setNum] = useState(0);

   return (
      <Page>
         <div>{num}</div>
         <button onClick ={() => setNum(num +1)}>ADD</button>
         <button onClick ={() => setNum(num -1)}>Remove</button>
      </Page>
   )
};