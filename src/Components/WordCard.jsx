import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordsArray from './wordsArray.json';


export default (props) => {
    const [words, setWords] = useState(wordsArray);
    const [pressed, isPressed] = useState(false);


    const handleClick = (wordFromButton) => {
        // здесь мы фильтруем массив слов так чтобы в нем было все кроме слова на которое нажали, а потом примешиваем к нему измененное нажатое слово
        const anotherWords = words.filter(words => words.id !== wordFromButton.id);
        setWords([...anotherWords, { id: wordFromButton.id, russian: wordFromButton.russian, isPressed: true }])
    };

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
                                    {wordsArray.map((words) => words.isPressed ?
                                        <Button onClick={() => handleClick(setWords)} id={words.id}>{words.russian}</Button>
                                        : <span>{words.russian}</span>)}
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container >
    );
}

