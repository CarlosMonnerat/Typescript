import Cart from "./Cart";
import Logo from "./Logo";

export default function Header() {
   return(
      <header className="flex justify-between items-center bg-zinc-800 h-20 px-10 text-amber-100">
         <Logo/>
         <Cart/>
      </header>
   )
};