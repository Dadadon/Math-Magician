import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Container>
      <Row>
        <Col>0</Col>
      </Row>
      <Row>
        <Col>AC</Col>
        <Col>+/-</Col>
        <Col>%</Col>
        <Col>/</Col>
      </Row>
      <Row>
        <Col><Button variant="secondary">7</Button></Col>
        <Col><Button variant="secondary">8</Button></Col>
        <Col><Button variant="secondary">9</Button></Col>
        <Col>*</Col>
      </Row>
      <Row>
        <Col><Button variant="secondary">4</Button></Col>
        <Col><Button variant="secondary">5</Button></Col>
        <Col><Button variant="secondary">6</Button></Col>
        <Col>+</Col>
      </Row>
      <Row>
        <Col><Button variant="secondary">1</Button></Col>
        <Col><Button variant="secondary">2</Button></Col>
        <Col><Button variant="secondary">7</Button></Col>
        <Col>-</Col>
      </Row>
      <Row>
        <Col xs={6}>O</Col>
        <Col>.</Col>
        <Col>=</Col>
      </Row>
    </Container>
  );
}

export default App;
