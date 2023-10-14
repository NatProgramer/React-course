import { useContext } from "react"
import { FiltersContext } from "../context/filtersContext"

interface Props {
  notFoundMsg: string
}

export default function NotFound({ notFoundMsg }: Props) {
  const { setFilters } = useContext(FiltersContext)
  return (
    <article className="not_found_body">
      <section>
        <h1>Not Found</h1>
        <p>{notFoundMsg}</p>
        <button 
          className="button-style" 
          onClick={() => setFilters({category: 'all', minPrice: 0})}>
          Reset Filters
        </button>
      </section>
    </article>
  )
}
