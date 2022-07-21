import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ButtonWord = ({ word }) => {
    const [isPressed, setIsPressed] = useState(false);
    const handleClick = () => {
        setIsPressed(true);
    };
    return isPressed ? (
        <div>
            {word.english}
        </div>
    ) : (
        <Button onClick={handleClick}>{word.russian}</Button>
    );
};