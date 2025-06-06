import { useContext } from "react";
import cartContext from "../context/cartContext";

const useCart = () => useContext(cartContext);

export default useCart;
