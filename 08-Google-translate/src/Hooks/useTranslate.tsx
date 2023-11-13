import { useReducer } from 'react'
import { initialState, reducer } from '../Reducer/translate.reducer'
import { type FromLanguages, type Languages } from '../types'

export const useTranslate = () => {
  const [{
    toLenguaje,
    fromLenguaje,
    fromText,
    loading,
    result
  }, dispatch] = useReducer(reducer, initialState)

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  const setFromLenguage = (payload: FromLanguages) => {
    if (payload === toLenguaje) return
    dispatch({ type: 'SET_FROM_LENGUAJE', payload })
  }

  const setToLenguage = (payload: Languages) => {
    if (payload === fromLenguaje) return
    dispatch({ type: 'SET_TO_LENGUAJE', payload })
  }

  const interChangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LENGUAGES' })
  }

  return {
    toLenguaje,
    fromLenguaje,
    fromText,
    loading,
    result,
    setFromText,
    setResult,
    setToLenguage,
    setFromLenguage,
    interChangeLanguages
  }
}
