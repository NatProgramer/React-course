import useTodos from '../Hooks/useTodos'

interface Props {
  id: string
  title: string
  completed: boolean
  handleDoubleClick: (id: string) => void
}

export default function Todo ({ id, title, completed, handleDoubleClick }: Props) {
  const { deleteTodo, changeTodoState } = useTodos()

  return (
     <>
      <div className='view' onDoubleClick={() => handleDoubleClick(id)}>
        <input
          className='toggle'
          onClick={() => { changeTodoState(id, !completed) }}
          defaultChecked={completed}
          type='checkbox'
        />
        <label>{title}</label>
        <button className='destroy' onClick={() => { deleteTodo(id) }}></button>
      </div>
    </>
  )
}
