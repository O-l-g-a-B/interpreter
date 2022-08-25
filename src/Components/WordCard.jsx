import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import wordsArray from "./wordsArray.json";
import { ButtonWord } from "./ButtonWord";

export default function WordCard(props) {
  return (
    <Row>
      {wordsArray.map((word) => (
        <Col key={word.id} sm={6} lg={4}>
          <Card border="warning" className="mb-4">
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
  );
}
