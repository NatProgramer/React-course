import { useReducer } from 'react'
import { initialState, reducer } from '../Reducer/translate.reducer'

export const useTranslate = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleFromText = (newFromText: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload: newFromText })
  }

  const handleToText = (newToText: string) => {
    dispatch({ type: 'SET_TO_TEXT', payload: newToText })
  }

  const handleFromLenguage = (newFromLenguaje: string) => {
    dispatch({ type: 'SET_FROM_LENGUAJE', payload: newFromLenguaje })
  }

  const handleToLenguage = (newToLenguaje: string) => {
    dispatch({ type: 'SET_TO_LENGUAJE', payload: newToLenguaje })
  }

  return {
    state,
    handleFromText,
    handleToText,
    handleToLenguage,
    handleFromLenguage
  }
}
