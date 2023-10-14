import useTodos from '../Hooks/useTodos'
import { TODO_FILTERS } from '../consts'

export function Filters () {
  const { filterTodos } = useTodos()
  const buttons = [
    { id: 1, content: TODO_FILTERS.ALL, href: `/?filter=${TODO_FILTERS.ALL}` },
    { id: 2, content: TODO_FILTERS.ACTIVE, href: `/?filter=${TODO_FILTERS.ACTIVE}` },
    { id: 3, content: TODO_FILTERS.COMPLETED, href: `/?filter=${TODO_FILTERS.COMPLETED}` }
  ]

  return (
    <ul className="filters">
      {
        buttons.map(({ id, content, href }) => {
          const isSelected = false
          const className = isSelected ? 'selected' : ''
          return (
            <li key={id}>
              <a
                href={href}
                className={className}
                onClick={(e) => {
                  e.preventDefault()
                  filterTodos(content)
                }}
              >
                {content}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
