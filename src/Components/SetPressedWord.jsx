import React, { useState } from "react";
import words from './Words.json';

export default function SetPressedWord(props) {

    const [currentData, setCurrentData] = useState(words);

    return (
        <p value={words.russian}></p>
    )
}