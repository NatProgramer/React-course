import useTodos from '../Hooks/useTodos'
import { Filters } from './Filters'

export default function Footer () {
  const { activeCount, completedTodos, clearCompletedTodos } = useTodos()
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> pending task{activeCount > 1 ? 's' : ''}
      </span>

      <Filters />

    { completedTodos > 0
      ? (
        <button
          className="clear-completed"
          onClick={clearCompletedTodos}>
            Borrar completados
      </button>
        )
      : null
    }
    </footer>
  )
}
