import { AddToCartIcon, RemoveFromCartIcon } from "../assets/Icons"
import { ProductItem } from "../interfaces/product.interface"
import { useCart } from "../Hooks/useCart"

interface Props {
  product: ProductItem
}

export default function ProductCard ({ product }: Props) {
  const { cart, addToCart, removeFromCart } = useCart() || { cart: [], addToCart: () => {}, removeOfTheCart: () => {}}

  const isAddedToCart = cart.some(cartItem => cartItem.id ===product.id)
  return (
    <li>
      <img src={product.thumbnail} alt={product.description} />
      <div>
        <p><strong>{product.title}</strong> - <span>${product.price}</span></p>
      </div>
      <div>
        <button 
          onClick={() => {
            isAddedToCart ? removeFromCart(product) : addToCart(product)
          }}
          style={{background: isAddedToCart ? '#c60003' : 'royalBlue'}}
        >
          {
          isAddedToCart 
            ? <RemoveFromCartIcon />
            : <AddToCartIcon /> 
          }
        </button>
      </div>
    </li>
  )
}