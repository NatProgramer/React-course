import { Form } from 'react-bootstrap'

const baseStyles = { paddingTop: '15px', border: '0', height: '200px' }

export function ToLanguageInput () {
  return (
    <Form.Control
      autoFocus={true}
      placeholder='Introduce un texto'
      as='textarea'
      style={baseStyles}
    />
  )
}

export function FromLanguageInput () {
  return (
    <Form.Control
      placeholder='Introduce un texto'
      as='textarea'
      disabled={true}
      style={{ ...baseStyles, backgroundColor: '#f5f5f5' }}
    />
  )
}
