import { type SUPPORTED_LENGUAGES, type AUTO_LENGUAGE } from './constants'

export type supportedlenguages = keyof typeof SUPPORTED_LENGUAGES

export type automatic = typeof AUTO_LENGUAGE

export interface TranslateState {
  fromLenguaje: string
  toLenguaje: string
  fromText: string
  result: string
  loading: boolean
}

export type TranslatePayload =
| { type: 'SET_FROM_TEXT', payload: string }
| { type: 'SET_FROM_LENGUAJE', payload: string }
| { type: 'SET_TO_LENGUAJE', payload: string }
| { type: 'SET_RESULT' }
| { type: 'INTERCHANGE_LENGUAGES' }
