import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
import wordsArray from './wordsArray.json';

export default function WordTabl(props) {
    const [words, setWords] = useState(wordsArray);
    return (
        <Table striped bordered hover variant="dark">
            <thead>

                <tr>
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {wordsArray.map((words, idx) => (
                    <tr key={words.id}>
                        <td>{idx + 1}</td>
                        <td>{words.english}</td>
                        <td>{words.transcription}</td>
                        <td>{words.russian}</td>
                        <td>
                            <Button variant="warning" size="sm">Edit</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

