import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Form } from 'react-bootstrap';


export default ({ word, editFormData, handleEditFormChange, handleCancelClick }) => {

    return (
        <tr>
            <td></td>
            <td>
                <InputGroup className="mb-3">
                    <Form.Control
                        name="english"
                        type="text"
                        required="required"
                        value={editFormData.english}
                        onChange={handleEditFormChange} />
                </InputGroup>
            </td>
            <td>
                <InputGroup className="mb-3">
                    <Form.Control
                        name="transcription"
                        type="text"
                        required="required"
                        value={editFormData.transcription}
                        onChange={handleEditFormChange} />
                </InputGroup>
            </td>
            <td >
                <InputGroup className="mb-3">
                    <Form.Control
                        name="russian"
                        type="text"
                        required="required"
                        value={editFormData.russian}
                        onChange={handleEditFormChange} />
                </InputGroup>
            </td>
            <td>
                <Button type="submit" variant="outline-warning" size="sm">Save</Button>
                <Button className="mt-2" onClick={handleCancelClick} type="submit" variant="outline-success" size="sm">Cancel</Button>
            </td>
        </tr>

    );
};
