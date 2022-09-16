import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (event) => {
    this.setState((state) => calculate(state, event.target.textContent));
    console.log(this.state);
  };
  
  render() {
    const { total, next, operation } = this.state;
    return (
      <Container className="d-grid gap-2 mt-5 pt-5">
        <Row>
          <Col>
            <p className="mb-0 text-end">
              {total}
              {operation}
              {next}             
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              AC
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              +/-
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              %
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100" onClick={this.handleClick}>
              ÷
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100" onClick={this.handleClick}>
              x
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              6
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100" onClick={this.handleClick}>
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100" onClick={this.handleClick}>
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={this.handleClick}>
              .
            </Button>
          </Col>
          <Col>
            <Button variant="warning" className="w-100" onClick={this.handleClick}>
              =
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
