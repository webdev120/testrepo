import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Card>sefsdf </Card>
          </Col>
          <Col>
            <Card>sefsdf </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>sefsdf </Card>
          </Col>
          <Col>
            <Card>sefsdf </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const Card = styled.div`
  background: red;
  position: relative;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
