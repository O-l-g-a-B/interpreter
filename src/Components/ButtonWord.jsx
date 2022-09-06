import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const ButtonWord = ({ word, count, setCount }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = () => {
    setIsPressed(true);
    setCount(count + 1);
  };

  return isPressed ? (
    <div className="mb-5">{word.russian || "бассейн"}</div>
  ) : (
    <Button className="mb-5" variant="warning" onClick={handleClick}>
      ❔
    </Button>
  );
};
