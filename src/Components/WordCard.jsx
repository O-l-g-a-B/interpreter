import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import words from './Words.json';
import SetPressedVerify from "./SetPressedVerify";
import SetPressedWord from "./SetPressedWord";

export default (props) => {
    const [currentData, setCurrentData] = useState(words);
    const [pressed, isPressed] = useState(words);

    const handleChange = (id) => {
        isPressed(!pressed);
    }
    return (
        <Container fluid>
            <Row>
                {currentData.map((words) => (
                    <Col key={words.id} sm={6} md={6}>
                        <Card border="warning" className='my-2'>
                            <Card.Body>
                                <Card.Title>{words.english}</Card.Title>
                                <Card.Text>{words.transcription}</Card.Text>

                                <Button {...words} onClick={handleChange} variant="warning">{pressed ? "Verify" : SetPressedWord}
                                </Button>

                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container >
    );
}