import { Form } from 'react-bootstrap'
import { type FromLanguages, type Languages } from '../types'
import { AUTO_LENGUAGE, SUPPORTED_LENGUAGES } from '../constants'

type Props =
| { type: 'from', onChange: (fromLanguage: FromLanguages) => void, value: Languages | FromLanguages }
| { type: 'to', onChange: (language: Languages) => void, value: Languages | FromLanguages }

export default function SelectLenguage ({ value, type, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Languages)
  }

  return (
    <Form.Select
      onChange={handleChange}
      aria-label='Select a language'
      value={value}
    >
      {
        type === 'from' &&
          <option value={AUTO_LENGUAGE}>Detectar idioma</option>
      }

      {Object.entries(SUPPORTED_LENGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
