import Todo from './Todo'
import React, { useEffect, useRef, useState } from 'react'
import useTodos from '../Hooks/useTodos'
import { type Todo as TodoType } from '../types'
import { useAutoAnimate } from '@formkit/auto-animate/react'


interface Props {
  todos: TodoType[]
}

export default function Todos ({ todos }: Props) {
  const [isEditing, setIsEditing] = useState<string>('')
  const [editedTitle, setEditedTitle] = useState<string>('')
  const inputTitleRef = useRef<HTMLInputElement>(null)
  const { editTodo, deleteTodo } = useTodos()
  const [parent] = useAutoAnimate(/* optional config */)

  const handleDoubleClick = (id: string) => {
    setIsEditing(id)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const todo = todos.find(todo => todo.id === isEditing)
    const { key } = e

    if (todo) {
      if (key === 'Enter') {
        if (editedTitle === '') {
          deleteTodo(todo?.id)
          return setIsEditing('')
        }
        if (editedTitle === todo?.title) return
        editTodo(isEditing, editedTitle)
        setIsEditing('')
      }
      if (key === 'Escape') return setIsEditing('')
    }
  }

  useEffect(() => {
    inputTitleRef.current?.focus()
  }, [isEditing])

  return (
    <>
      <ul className="todo-list" ref={parent}>
        {
          todos.map(todo => (
            <li
              key={todo.id}
              className={`${todo.completed ? 'completed ' : ''}${isEditing === todo.id ? 'editing' : ''}`}
            >
              <Todo
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
                id={todo.id}
                handleDoubleClick={handleDoubleClick}
              />

              <input 
                className='edit'
                value={editedTitle}
                onChange={(e) => { setEditedTitle(e.target.value) }}
                onKeyDown={handleKeyDown}
                onBlur={() => setIsEditing('')}
                ref={inputTitleRef}
              />
            </li>
          ))
        }
      </ul>
    </>
  )
}
