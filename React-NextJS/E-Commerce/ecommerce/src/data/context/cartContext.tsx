import { createContext, useState } from "react";

interface cartContextProps {
   number: number;
   increment?: () => void;
   decrement?: () => void;
};

const cartContext = createContext<cartContextProps>({} as any);

export function ProviderCart(props: any) {
   const [numero, setNumero] = useState(100);
   
   return(
      <cartContext.Provider value={{
         number: numero,
         increment: () => setNumero(numero + 1),
         decrement: () => setNumero(numero - 1)
      }}>
         {props.children}
      </cartContext.Provider>
   )
};

export default cartContext;