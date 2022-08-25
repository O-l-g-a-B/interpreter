import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import WordTabl from "./Components/WordTabl";
import Slider from "./Components/Slider";
import NoMatch from "./Components/NoMatch/NoMatch";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (<Container>
    <Router>
    <header>
      
      <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
      
        <Link to="/">
              <h1 className="header__words header__words-logo">Dictionary</h1>
        </Link>
        
        <ul>
          <li>
             <Link className="header__words header__words-cards" to="/cards">Game
            </Link>
          </li>
        </ul>
      
      </Navbar>
      
    </header>
    
    <Routes>
      <Route exact path="/cards" element={<Slider/>}/>
      <Route exact path="/" element={<WordTabl />}/>
      <Route path="*" element={<NoMatch/>}/>   
    </Routes> 
    </Router></Container>
  );
}

export default App;
