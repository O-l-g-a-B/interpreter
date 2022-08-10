import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import wordsArray from "./wordsArray.json";
import { ButtonWord } from "./ButtonWord";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      {wordsArray.map((word) => (
        <Carousel.Item key={word.id}>
          <Card border="warning" className="text-center my-4">
            <Card.Body>
              <Card.Title className="pt-5">
                {word.english || "swimming pool"}
              </Card.Title>
              <Card.Text>{word.transcription || "[ ˈswɪmɪŋ puːl ]"}</Card.Text>
              <div>
                <ButtonWord word={word} key={word.id} />
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
