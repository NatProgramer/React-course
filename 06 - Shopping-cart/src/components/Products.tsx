import { ProductItem } from '../interfaces/product.interface'
import ProductCard from './ProductCard'

interface Props {
  products: ProductItem[]
}

export default function Product ({ products }: Props) {
  return (
    <ul>
      {
        products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </ul>
  )
}
