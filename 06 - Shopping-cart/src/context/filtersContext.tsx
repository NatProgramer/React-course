import { createContext, useState } from "react";
import Filter from "../interfaces/filter.interface";

interface FiltersContextType {
  filters: Filter
  setFilters: React.Dispatch<React.SetStateAction<Filter>> 
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FiltersContext = createContext<FiltersContextType>({
  filters: {
    category: 'all',
    minPrice: 0
  },
  setFilters: (defaultValue) => {defaultValue}
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FiltersProvider ({ children }: any) {
  const [filters, setFilters] = useState<Filter>({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}