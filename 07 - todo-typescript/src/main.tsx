import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'todomvc-app-css/index.css'
import { TodosContextProvider } from './context/todosContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
)
