import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export function useCart () {
  const { cart, removeFromCart, addToCart, clearCart } = useContext(cartContext)

  if(cart === undefined) {
    throw new Error("You try use cartContext in a don't provided component")
  }

  return { cart, addToCart, removeFromCart, clearCart }
}