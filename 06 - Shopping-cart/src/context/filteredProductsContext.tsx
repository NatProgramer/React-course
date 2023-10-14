import { SetStateAction, createContext, useState } from "react";
import { ProductItem } from "../interfaces/product.interface";
import { products } from '../mucks/products.json'

interface FilteredProductsType {
  filteredProducts: ProductItem[],
  setFilteredProducts: React.Dispatch<SetStateAction<ProductItem[]>>
}

export const FilteredProductsContext = createContext<FilteredProductsType>({
  filteredProducts: products,
  setFilteredProducts: (newValue) => {newValue}
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FilteredProductsProvider ({ children }: any) {
  const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>(products)

  return (
    <FilteredProductsContext.Provider value={{
      filteredProducts,
      setFilteredProducts
    }}>
      {children}
    </FilteredProductsContext.Provider>
  )
}
