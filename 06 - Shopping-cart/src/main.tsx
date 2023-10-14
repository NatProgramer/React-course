import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FiltersProvider } from './context/filtersContext.tsx'
import { FilteredProductsProvider } from './context/filteredProductsContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <FilteredProductsProvider>
        <App />
    </FilteredProductsProvider>
  </FiltersProvider>
)
