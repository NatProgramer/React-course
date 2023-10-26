import { type TranslatePayload, type TranslateState } from '../types'

export const initialState: TranslateState = {
  fromLenguaje: 'auto',
  toLenguaje: 'en',
  fromText: '',
  result: '',
  loading: false
}

export const reducer = (state: TranslateState, action: TranslatePayload): TranslateState => {
  const { type } = action

  if (type === 'SET_FROM_TEXT') {
    const { payload } = action
    return {
      ...state,
      fromText: payload
    }
  }

  if (type === 'SET_FROM_LENGUAJE') {
    const { payload } = action
    return {
      ...state,
      fromLenguaje: payload
    }
  }

  if (type === 'SET_TO_LENGUAJE') {
    const { payload } = action
    return {
      ...state,
      toLenguaje: payload
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state
    }
  }

  if (type === 'INTERCHANGE_LENGUAGES') {
    if (state.fromLenguaje === 'auto') return state
    return {
      ...state,
      toLenguaje: state.fromLenguaje,
      fromLenguaje: state.toLenguaje
    }
  }

  return state
}
