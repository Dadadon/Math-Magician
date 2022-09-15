import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <Container className="d-grid gap-2 mt-5 pt-5">
        <Row>
          <Col>
            <p className="mb-0 text-end">0</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="w-100">
              AC
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100">
              +/-
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100">
              %
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100">
              /
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="w-100">
              7
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100">
              8
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100">
              9
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100">
              *
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="w-100">
              4
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100">
              5
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100">
              6
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100">
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="w-100">
              1
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100">
              2
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100">
              7
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100">
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Button variant="secondary" className="w-100">
              0
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100">
              .
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100">
              =
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
