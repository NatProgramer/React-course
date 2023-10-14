import '../../../Showdebug.css'
import { type Todo as TodoType } from '../types'

interface Props {
  list: TodoType[]
}

export default function ShowDebug ({ list }: Props) {
  return (
    <footer className='footer'>
      {
        list.map(item => (
          <span key={item.id}>
            {item.title + '  '}
          </span>
        ))
      }
    </footer>
  )
}
