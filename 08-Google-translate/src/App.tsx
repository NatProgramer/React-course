import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { initialState, reducer } from './Reducer/translate.reducer'

const useTranslate = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateFromText = (newFromText: string) => {
    dispatch({ payload: 'SET_FROM_TEXT', newFromText })
  }

  const updateToText = (newToText: string) => {
    dispatch({ payload: 'SET_TO_TEXT', newToText })
  }

  return {
    state,
    updateFromText,
    updateToText
  }
}

export default function App () {
  useTranslate()
  return (
    <>
      <h1>Google translate</h1>
    </>
  )
}
