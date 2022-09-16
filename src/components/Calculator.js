import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [items, setItems] = useState({
    item: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (event) => {
    const { item } = items;
    setItems({ item: calculate(item, event.target.textContent) });
  };
  const { item } = items;
  const { total, next, operation } = item;
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
          <Button variant="secondary" className="w-100" onClick={handleClick}>
            AC
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            +/-
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            %
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            className="w-100"
            onClick={handleClick}
          >
            ÷
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            7
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            8
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            9
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            className="w-100"
            onClick={handleClick}
          >
            x
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            4
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            5
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            6
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            className="w-100"
            onClick={handleClick}
          >
            -
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            1
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            2
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            3
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            className="w-100"
            onClick={handleClick}
          >
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            0
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={handleClick}
          >
            .
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            className="w-100"
            onClick={handleClick}
          >
            =
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
