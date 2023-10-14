import React, { useState } from 'react'
import useTodos from '../Hooks/useTodos'

export default function CreateTodo () {
  const [inputValue, setInputValue] = useState('')
  const { addTodo } = useTodos()

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && inputValue !== '') {
      addTodo(inputValue)
      setInputValue('')
    }
  }

  return (
    <>
      <input
        className='new-todo'
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        onKeyDown={handleKeyDown}
        placeholder='¿Qué quieres hacer?'
        autoFocus
      />
    </>
  )
}
