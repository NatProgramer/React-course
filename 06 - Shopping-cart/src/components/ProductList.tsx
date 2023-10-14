import Product from './Products'
import NotFound from './NotFound'
import { useContext } from 'react'
import { FiltersContext } from '../context/filtersContext'
import { FilteredProductsContext } from '../context/filteredProductsContext'

export default function ProductList () {
  const { filters } = useContext(FiltersContext)
  const { filteredProducts } = useContext(FilteredProductsContext)

  return (
      <main className="products">
        {
          filteredProducts.length > 0 
          ? <Product products={filteredProducts.slice(0, 15)} />
          : <NotFound 
              notFoundMsg={`not found nothing product with a mayor price ${filters.minPrice} and ${filters.category} category`}
            />
        }
      </main>

  )
}
