import { CartItemType, ProductItem } from "../interfaces/product.interface"

type CartAction =
  | { type: 'ADD_TO_CART'; payload: ProductItem }
  | { type: 'REMOVE_FROM_CART'; payload: ProductItem }
  | { type: 'CLEAR_CART' };

const updateLocalStorage = (state: CartItemType[]) => {
  window.localStorage.setItem("cart", JSON.stringify(state))
}

const cartStorage = window.localStorage.getItem("cart")
export const initialValue: CartItemType[] = cartStorage 
  ? JSON.parse(cartStorage) 
  : []
    
export const reducer = (state: CartItemType[], action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const productCartIndex = state.findIndex(item => item.id === action.payload.id)

      if (productCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productCartIndex].quantity++
        
        updateLocalStorage(newState)
        return newState
      } 
      const newCart = [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]

      updateLocalStorage(newCart)
      return newCart
      case 'REMOVE_FROM_CART':
      const newState = state.filter(item => item.id !== action.payload.id)

      updateLocalStorage(newState)
      return newState
    case 'CLEAR_CART':
      updateLocalStorage([])
      return []
    }
}