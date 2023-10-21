export interface TranslateState {
  fromText: string
  toText: string
  fromLenguaje: string
  toLenguaje: string
  loading: boolean
}

export const initialState: TranslateState = {
  fromText: '',
  toLenguaje: '',
  fromLenguaje: '',
  toText: '',
  loading: false
}

type TranslatePayload =
| { payload: 'SET_FROM_TEXT', newFromText: string }
| { payload: 'SET_TO_TEXT', newToText: string }
| { payload: 'SET_FROM_LENGUAJE', newFromLenguaje: string }
| { payload: 'SET_TO_LENGUAJE', newToLenguaje: string }

export const reducer = (state: TranslateState, action: TranslatePayload): TranslateState => {
  const { payload } = action

  if (payload === 'SET_FROM_TEXT') {
    const { newFromText } = action
    return {
      ...state,
      fromText: newFromText
    }
  }

  if (payload === 'SET_TO_TEXT') {
    const { newToText } = action
    return {
      ...state,
      toText: newToText
    }
  }

  if (payload === 'SET_FROM_LENGUAJE') {
    const { newFromLenguaje } = action
    return {
      ...state,
      fromLenguaje: newFromLenguaje
    }
  }

  if (payload === 'SET_TO_LENGUAJE') {
    const { newToLenguaje } = action
    return {
      ...state,
      toLenguaje: newToLenguaje
    }
  }

  return {
    ...state
  }
}
