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

  const translate = (text: string) => {
    if (text === 'Hello' && toLenguaje === 'es') {
      setResult('Hola')
    } else if (text === 'She said no' && toLenguaje === 'es') {
      setResult('Ella dijo no')
    } else if (text === 'Before you run away' && toLenguaje === 'es') {
      setResult('Antes de irte')
    } else if (text === 'Hola' && toLenguaje === 'en') {
      setResult('Hello')
    } else if (text === 'Como anda' && toLenguaje === 'en') {
      setResult('How are you?')
    } else {
      setResult('Error, try with the word "Hello"')
    }
    console.log(result)
  }

  return {
    toLenguaje,
    fromLenguaje,
    fromText,
    loading,
    result,
    translate,
    setFromText,
    setResult,
    setToLenguage,
    setFromLenguage,
    interChangeLanguages
  }
}
