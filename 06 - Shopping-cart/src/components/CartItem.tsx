import { CartItemType } from "../interfaces/product.interface"
import { useCart } from "../Hooks/useCart"

interface Props {
  productOfCart: CartItemType
}

export function CartItem ({productOfCart}: Props) {
  const { title, price, description, thumbnail, quantity } = productOfCart
  const { addToCart } = useCart() || { addToCart: () => {}}
  return (
    <li>
      <img 
        src={thumbnail}
        alt={description} 
      />
      <p>
        <strong>{title}</strong> - <span>${price}</span>
      </p>

      <span>Quantity: <strong>{quantity}</strong></span>
      <button className="quantity-btn" onClick={() => addToCart(productOfCart)}>+</button>
    </li>
  )
}