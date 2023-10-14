import Header from "./components/Header"
import ProductList from "./components/ProductList";
import ShowDebug from "./components/ShowDebug";
import { useCart } from "./Hooks/useCart";
import CartList from "./components/CartList";
import { CartProvider } from './context/cartContext.tsx'

export function App () {
  useCart()

  return (
    <>
      <Header />

      <CartProvider>
        <CartList />
        <ProductList />
        <ShowDebug />
      </CartProvider>

      
    </>
  )
}

export default App
