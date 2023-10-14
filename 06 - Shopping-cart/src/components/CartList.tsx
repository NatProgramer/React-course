import { useId } from "react"
import { CartIcon, ClearCartIcon } from "../assets/Icons"
import { CartItem } from "./CartItem"
import { useCart } from "../Hooks/useCart"
import { CartItemType } from "../interfaces/product.interface"

export default function CartList() {
  const { cart, clearCart } = useCart() || { cart: [], clearCart: () => {}}
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className="cart">
        <ul>
          {
            cart.map((cartItem: CartItemType) => (
              <CartItem
                productOfCart={cartItem}
                key={cartItem.id}
              />
            ))
          }
        </ul>

          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
      </aside>
    </>
  )
}
