import React, { useState } from "react";
import { Button } from "react-bootstrap";


export const ButtonWord = ({ word }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = () => {
    setIsPressed(true);
  };
  return isPressed ? (
    <div>{word.russian}</div>
  ) : (
    <Button variant="warning" onClick={handleClick}>
      Examination
    </Button>
  );
};
