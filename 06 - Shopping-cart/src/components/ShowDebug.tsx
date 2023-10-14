import { useContext } from 'react';
import '../../../Showdebug.css'
import { cartContext } from '../context/cartContext';

export default function ShowDebug() {
  const { cart } = useContext(cartContext)

  return (
    <footer className='footer'>
      {
        cart.map(item => (
          <span key={item.id}>{JSON.stringify(item.title)}, </span>
        ))
      }
    </footer>
  )
}
