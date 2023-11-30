import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useTranslate } from './Hooks/useTranslate'
import { ArrowIcon } from './Icons'
import SelectLenguage from './Components/SelectLenguage'
import { FromLanguageInput, ToLanguageInput } from './Components/TextInputs'

export default function App () {
  const {
    fromLenguaje,
    fromText,
    toLenguaje,
    result,
    loading,
    interChangeLanguages,
    setFromLenguage,
    setToLenguage,
    translate
  } = useTranslate()

  return (
    <>
    <Container fluid>
      <h1>Google translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <SelectLenguage
              type='from'
              value={fromLenguaje}
              onChange={setFromLenguage}
            />

            <ToLanguageInput onChange={translate} text={fromText} />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant="link" onClick={interChangeLanguages}>
            <ArrowIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <SelectLenguage
              type='to'
              value={toLenguaje}
              onChange={setToLenguage}
            />

            <FromLanguageInput loading={loading} text={result} />
          </Stack>
        </Col>
      </Row>
    </Container>
    </>
  )
}
