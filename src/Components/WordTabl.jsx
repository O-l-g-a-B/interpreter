import React, { useState, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, InputGroup, Button } from 'react-bootstrap';
import wordsArray from './wordsArray.json';
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

export default function WordTabl(props) {


    const [words, setWords] = useState(wordsArray);

    const [editFormData, setEditFormData] = useState({
        english: '',
        transcription: '',
        russian: '',
    })

    const [editWordId, setEditWordId] = useState(null);

    const handleEditClick = (event, word) => {
        event.preventDefault();
        setEditWordId(word.id);

        const formValues = {
            english: word.english,
            transcription: word.transcription,
            russian: word.russian,
        }

        setEditFormData(formValues);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedWord = {
            id: editWordId,
            english: editFormData.english,
            transcription: editFormData.transcription,
            russian: editFormData.russian,
        }

        const newWords = [...words];

        const index = words.findIndex((word) => word.id === editWordId);

        newWords[index] = editedWord;

        setWords(newWords);
        setEditWordId(null);
    };

    const handleCancelClick = () => {
        setEditWordId(null)
    }

    return (
        <Form onSubmit={handleEditFormSubmit}>
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
                    {words.map((word, idx) => (
                        <Fragment>
                            {editWordId === word.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} word={word} key={word.id} />) : (<ReadOnlyRow word={word} idx={idx} key={word.id} handleEditClick={handleEditClick} />)}
                        </Fragment>
                    ))}
                </tbody>
            </Table>
        </Form>
    );
}

