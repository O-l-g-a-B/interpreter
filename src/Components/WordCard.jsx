import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordsArray from './wordsArray.json';
import { ButtonWord } from "./ButtonWord";

export default (props) => {

    return (
        <Container fluid>
            <Row>
                {wordsArray.map((word) => (
                    <Col key={word.id} sm={6} lg={4}>
                        <Card border="warning" className='my-2'>
                            <Card.Body>
                                <Card.Title>{word.english}</Card.Title>
                                <Card.Text>{word.transcription}</Card.Text>
                                <div>
                                    <ButtonWord word={word} key={word.id} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}

