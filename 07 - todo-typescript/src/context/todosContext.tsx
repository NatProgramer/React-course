import { createContext, useReducer } from 'react'
import { type TodoList } from '../types'
import { initialValue, todosReducer } from '../reducer/todos.reducer'

interface todosContextType {
  todos: TodoList
  filterSelected: string
  completedTodos: number
  activeCount: number
  addTodo: (todoTitle: string) => void
  deleteTodo: (todoId: string) => void
  editTodo: (id: string, newTitle: string) => void
  changeTodoState: (todoId: string, completed: boolean) => void
  filterTodos: (filter: string) => void
  clearCompletedTodos: () => void
}

export const todosContext = createContext<todosContextType>({
  todos: [],
  filterSelected: 'all',
  completedTodos: 0,
  activeCount: 0,
  editTodo(id, newTitle) {
    id 
    newTitle
  },
  addTodo: (todoTitle: string) => { todoTitle },
  deleteTodo: (todoId) => { todoId },
  filterTodos: () => {
    return []
  },
  clearCompletedTodos: () => {},
  changeTodoState: (todoId, completed) => {
    const complete = completed
    complete
    const id = todoId
    id
  }
})

export function TodosContextProvider ({ children }: any) {
  const [state, dispatch] = useReducer(todosReducer, initialValue)

  const {
    todos,
    completedTodos,
    activeCount,
    filterSelected
  } = state

  const addTodo = (todoTitle: string) => {
    dispatch({ type: 'ADD_TODO', payload: { title: todoTitle } })
  }

  const deleteTodo = (todoId: string) => {
    dispatch({ type: 'DELETE_TODO', payload: { id: todoId } })
  }

  const editTodo = (id: string, newTitle: string) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, title: newTitle }})
  }

  const changeTodoState = (todoId: string, completed: boolean) => {
    dispatch(
      { type: 'CHANGE_TODO_STATE', payload: { id: todoId, completed } }
    )
  }

  const filterTodos = (filter: string) => {
    dispatch({ type: 'FILTER_TODOS', payload: { filter } })

    new URLSearchParams(window.location.search).set('filter', filter)
    window.history.pushState({}, '', `${window.location.origin}/?filter=${filter}`)
  }

  const clearCompletedTodos = () => {
    dispatch({ type: 'CLEAR_COMPLETED_TODOS' })
  }

  return (
    <todosContext.Provider value={{
      todos,
      filterSelected,
      completedTodos,
      activeCount,
      addTodo,
      deleteTodo,
      editTodo,
      changeTodoState,
      filterTodos,
      clearCompletedTodos
    }}>
      {children}
    </todosContext.Provider>
  )
}
