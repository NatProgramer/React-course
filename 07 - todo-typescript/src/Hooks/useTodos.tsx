import { useContext } from 'react'
import { todosContext } from '../context/todosContext'
import { TODO_FILTERS } from '../consts'

export default function useTodos () {
  const {
    todos,
    filterSelected,
    completedTodos,
    activeCount,
    addTodo,
    changeTodoState,
    editTodo,
    clearCompletedTodos,
    deleteTodo,
    filterTodos
  } = useContext(todosContext)

  if (todos === undefined) {
    throw new Error('You are trying access to a context while you are out from the provider')
  }
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }

    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }

    return true
  })

  return {
    todos: filteredTodos,
    filterSelected,
    completedTodos,
    activeCount,
    addTodo,
    deleteTodo,
    editTodo,
    changeTodoState,
    filterTodos,
    clearCompletedTodos
  }
}
