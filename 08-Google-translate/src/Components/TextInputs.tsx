import { Form } from 'react-bootstrap'

interface ToLanguagesProps {
  onChange: (text: string) => void
  text: string
}

const baseStyles = { paddingTop: '15px', border: '0', height: '200px' }

export function ToLanguageInput ({ onChange, text }: ToLanguagesProps) {
  console.log(text)
  return (
    <Form.Control
      autoFocus={true}
      placeholder='Introduce un texto'
      as='textarea'
      style={baseStyles}
      content={text}
      onChange={(e) => { onChange(e.target.value) }}
    />
  )
}

interface FromLanguageProps {
  loading: boolean
  text: string
}

export function FromLanguageInput ({ loading, text }: FromLanguageProps) {
  return (
    <Form.Control
      placeholder={ loading ? 'Cargando' : 'Traduccion' }
      as='textarea'
      content={text}
      disabled={true}
      style={{ ...baseStyles, backgroundColor: '#f5f5f5' }}
    />
  )
}
