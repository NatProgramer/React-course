import { Form } from 'react-bootstrap'
import { SUPPORTED_LENGUAGES } from '../constants'

interface Props {
  onChange: (payload: any) => void
}

export default function SelectLenguage ({ onChange }: Props) {
  const handleChange = (e: any) => {
    onChange(e.target.value)
  }
  return (
    <Form.Select onChange={handleChange} aria-label='Select a language'>
      {Object.entries(SUPPORTED_LENGUAGES).map(([key, lang]) => (
        <option key={key} value={key}>
          {lang}
        </option>
      ))}
    </Form.Select>
  )
}
