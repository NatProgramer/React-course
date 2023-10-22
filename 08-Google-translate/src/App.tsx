import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useTranslate } from './Hooks/useTranslate'

export default function App () {
  const { state, handleFromLenguage } = useTranslate()
  console.log(state.fromLenguaje)

  return (
    <>
      <h1>Google translate</h1>
      <button onClick={() => { handleFromLenguage('es') }}>Change to spanish</button>
    </>
  )
}
