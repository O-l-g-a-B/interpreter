import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./Components/Navibar";
import WordTabl from "./Components/WordTabl";
import WordCard from "./Components/WordCard";

function App() {
  return (
    <>
      <NaviBar />
      <Container fluid>
        <Row>
          <Col md={8}>
            <WordCard />
          </Col>
          <Col md={4}>
            <WordTabl />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
