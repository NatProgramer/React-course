import { useContext, useEffect, useId } from "react"
import { FiltersContext } from "../context/filtersContext"
import { useFilters } from "../Hooks/useFilters"

export default function Filters() {
  const { filters, setFilters } = useContext(FiltersContext)
  const { changeFilteredProducts } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  useEffect(() => changeFilteredProducts(), [filters])

  return (
    <>
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>
          <strong>Min. Price:</strong>
        </label>
        <input 
          type="range" 
          id={minPriceFilterId} 
          name="min-price" 
          min={0} 
          max={1000}
          defaultValue={filters.minPrice}
          onChange={(e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setFilters((prevState: any) => ({
              ...prevState,
              minPrice: parseInt(e.target.value)
            }))
          }}
        />
        <strong>{filters.minPrice}</strong>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>
          <strong>Category</strong>
        </label>
        
        <select
          defaultValue={filters.category}
          id={categoryFilterId}
          onChange={(e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setFilters((prevState: any) => ({
              ...prevState,
              category: e.target.value
            }))
          }}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="home-decoration">Decoration</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
        </select>
      </div>
    </section>
    </>
  )
}
