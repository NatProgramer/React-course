import { type Todo as TodoType, type TodoList } from '../types'

type TodosAction = { type: 'ADD_TODO', payload: { title: string } }
| { type: 'DELETE_TODO', payload: { id: string } }
| { type: 'EDIT_TODO', payload: { id: string, title: string } }
| { type: 'CHANGE_TODO_STATE', payload: { id: string, completed: boolean } }
| { type: 'FILTER_TODOS', payload: { filter: string } }
| { type: 'CLEAR_COMPLETED_TODOS' }

interface TodosValue {
  todos: TodoList
  filterSelected: string
  completedTodos: number
  activeCount: number
}

const updateStorage = (state: TodosValue) => {
  window.localStorage.setItem('todos', JSON.stringify(state))
}

const todosStorage: string | null = window.localStorage.getItem('todos')
export const initialValue: TodosValue = todosStorage
  ? JSON.parse(todosStorage)
  : {
      todos: [],
      activeCount: 0,
      completedTodos: 0,
      filterSelected: 'all'
    }

export const todosReducer = (state: TodosValue, action: TodosAction
): TodosValue => {
  const { todos } = state

  if (action.type === 'ADD_TODO') {
    const newTodo: TodoType = {
      id: crypto.randomUUID(),
      title: action.payload.title,
      completed: false
    }
    const newTodos = [...todos, newTodo]

    const completedTodos = newTodos.filter(todo => todo.completed).length
    const activeCount = newTodos.length - completedTodos

    const newState = {
      ...state,
      completedTodos,
      activeCount,
      todos: newTodos
    }
    updateStorage(newState)
    return newState
  }

  if (action.type === 'DELETE_TODO') {
    const newTodos = todos.filter(todo => todo.id !== action.payload.id)

    const completedTodos = newTodos.filter(todo => todo.completed).length
    const activeCount = newTodos.length - completedTodos

    const newState = {
      ...state,
      completedTodos,
      activeCount,
      todos: newTodos
    }

    updateStorage(newState)
    return newState
  }

  if (action.type === 'FILTER_TODOS') {
    const { filter } = action.payload
    const newState: TodosValue = {
      ...state,
      filterSelected: filter
    }

    updateStorage(newState)
    return {
      ...state,
      filterSelected: filter
    }
  }

  if (action.type === 'EDIT_TODO') {
    const { todos } = state
    const { id, title } = action.payload
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          title
        }
      }

      return todo
    })

    const completedTodos = newTodos.filter(todo => todo.completed).length
    const activeCount = newTodos.length - completedTodos
    const newState: TodosValue = {
      ...state,
      completedTodos,
      activeCount,
      todos: newTodos
    }

    updateStorage(newState)
    return newState
  }

  if (action.type === 'CHANGE_TODO_STATE') {
    const { id, completed } = action.payload
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    const completedTodos = newTodos.filter(todo => todo.completed).length
    const activeCount = newTodos.length - completedTodos
    const newState: TodosValue = {
      ...state,
      completedTodos,
      activeCount,
      todos: newTodos
    }

    updateStorage(newState)
    return newState
  }

  if (action.type === 'CLEAR_COMPLETED_TODOS') {
    const newTodos = todos.filter(todo => !todo.completed)

    const completedTodos = newTodos.filter(todo => todo.completed).length
    const activeCount = newTodos.length - completedTodos
    const newState: TodosValue = {
      ...state,
      completedTodos,
      activeCount,
      todos: newTodos
    }

    return newState
  }

  updateStorage(state)
  return state
}
