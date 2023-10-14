import { useContext } from "react"
import { products }  from '../mucks/products.json'
import { FiltersContext } from "../context/filtersContext"
import { FilteredProductsContext } from "../context/filteredProductsContext"

export function useFilters () {
  const { filters } = useContext(FiltersContext)
  const { setFilteredProducts } = useContext(FilteredProductsContext)

  if (setFilteredProducts === undefined) {
    throw new Error(
      "You are trying access to a context while you are out from the provider"
    )
  }

  const filterProducts = () => {
    return products.filter(product => (
      (product.price >= filters.minPrice) &&
      (filters.category === "all" || product.category === filters.category)
    ))
  }

  const changeFilteredProducts = () => {
    const newFilteredProducts = filterProducts()
    setFilteredProducts(newFilteredProducts)
  }

  return { filters, changeFilteredProducts, filterProducts }
}
