import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordsArray from './wordsArray.json';
import { ButtonWord } from "./ButtonWord";

export default (props) => {

    return (
        <Container fluid>
            <Row>
                {wordsArray.map((words) => (
                    <Col key={words.id} sm={6} md={6}>
                        <Card border="warning" className='my-2'>
                            <Card.Body>
                                <Card.Title>{words.english}</Card.Title>
                                <Card.Text>{words.transcription}</Card.Text>
                                <div>
                                    {wordsArray.map((word) => (<ButtonWord word={word} />
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}

