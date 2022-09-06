import React, { useState } from "react";
import { Carousel, Card, Form } from "react-bootstrap";
import wordsArray from "./wordsArray.json";
import { ButtonWord } from "./ButtonWord";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [value, setValue] = useState("");

  const filteredWords = wordsArray.filter((word) => {
    return word.english.toLowerCase().includes(value.toLowerCase());
  });

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="top"></div>
      <Form.Floating>
        <Form.Control
          type="text"
          placeholder="Search..."
          onChange={(event) => setValue(event.target.value)}
        />
        <label>Search...</label>
      </Form.Floating>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        {filteredWords.map((word) => (
          <Carousel.Item key={word.id}>
            <Card border="warning" className="text-center my-4">
              <Card.Body>
                <Card.Title className="pt-5">
                  {word.english || "swimming pool"}
                </Card.Title>
                <Card.Text>
                  {word.transcription || "[ ˈswɪmɪŋ puːl ]"}
                </Card.Text>
                <div>
                  <ButtonWord
                    word={word}
                    key={word.id}
                    count={count}
                    setCount={setCount}
                  />
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
      <h3>Learned {count} words</h3>
    </>
  );
}
