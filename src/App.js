import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./Components/Navibar";
import WordTabl from "./Components/WordTabl";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <NaviBar />
      <Container fluid>
          <Slider/>
          <WordTabl />
      </Container>
    </>
  );
}

export default App;
