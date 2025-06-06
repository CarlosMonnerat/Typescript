import { createContext } from "react";

const cartContext = createContext<any>(null);

export function ProviderCart(props: any) {
   return(
      <cartContext.Provider value={{
         number: 1000,
      }}>
         {props.children}
      </cartContext.Provider>
   )
};

export default cartContext;