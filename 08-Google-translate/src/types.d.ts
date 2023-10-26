import { type SUPPORTED_LENGUAGES, type AUTO_LENGUAGE } from './constants'

export type Languages = keyof typeof SUPPORTED_LENGUAGES

export type AutoLanguage = typeof AUTO_LENGUAGE

export type FromLanguages = Languages | AutoLanguage

export interface TranslateState {
  fromLenguaje: string
  toLenguaje: string
  fromText: string
  result: string
  loading: boolean
}

export type TranslatePayload =
| { type: 'SET_FROM_TEXT', payload: string }
| { type: 'SET_FROM_LENGUAJE', payload: FromLanguages }
| { type: 'SET_TO_LENGUAJE', payload: Languages }
| { type: 'SET_RESULT', payload: string }
| { type: 'INTERCHANGE_LENGUAGES' }
