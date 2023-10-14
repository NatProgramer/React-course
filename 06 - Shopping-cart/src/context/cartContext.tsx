import { createContext, useReducer } from "react"
import { CartItemType, ProductItem } from "../interfaces/product.interface"
import { initialValue, reducer } from "../reducers/cart.reducer"

interface cartContextType {
  cart: CartItemType[],
  addToCart: (product: ProductItem) => void,
  removeFromCart: (product: ProductItem) => void,
  clearCart: () => void
}

export const cartContext = createContext<cartContextType>({
  cart: [],
  addToCart: (product: ProductItem) => {product},
  removeFromCart: (product: ProductItem) => {product.id},
  clearCart: () => {}
})

export function CartProvider({ children }: any) {
  const [cartState, dispatch] = useReducer(reducer, initialValue)

  const addToCart = (product: ProductItem) => dispatch({ type: 'ADD_TO_CART', payload: product})
  const removeFromCart = (product: ProductItem) => dispatch({ type: 'REMOVE_FROM_CART', payload: product})
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  return (
    <cartContext.Provider value={{
      cart: cartState,
      addToCart,
      removeFromCart,
      clearCart
    }}>
        {children}
    </cartContext.Provider>
  )
}
