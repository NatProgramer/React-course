import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useTranslate } from './Hooks/useTranslate'
import { ArrowIcon } from './Icons'
import SelectLenguage from './Components/SelectLenguage'

export default function App () {
  const {
    fromLenguaje,
    toLenguaje,
    interChangeLanguages,
    setFromLenguage,
    setToLenguage
  } = useTranslate()

  return (
    <>
    <Container fluid>
      <h1>Google translate</h1>

      <Row>
        <Col>
          <h2>From</h2>
          {fromLenguaje}
          <SelectLenguage onChange={setFromLenguage} />
        </Col>

        <Col>
          <Button variant="link" onClick={interChangeLanguages}>
            <ArrowIcon />
          </Button>
        </Col>

        <Col>
          <h2>To</h2>
          {toLenguaje}
          <SelectLenguage onChange={setToLenguage} />
        </Col>
      </Row>
    </Container>
    </>
  )
}
