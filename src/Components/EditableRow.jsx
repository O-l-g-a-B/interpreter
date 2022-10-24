import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";

export default function EditableRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr>
      <td></td>
      <td>
        <InputGroup className="mb-3">
          <Form.Control
            required
            name="english"
            type="text"
            value={editFormData.english}
            onChange={handleEditFormChange}
          />
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <Form.Control
            required
            name="transcription"
            type="text"
            value={editFormData.transcription}
            onChange={handleEditFormChange}
          />
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <Form.Control
            required
            name="russian"
            type="text"
            value={editFormData.russian}
            onChange={handleEditFormChange}
          />
        </InputGroup>
      </td>
      <td>
        <Button type="submit" variant="outline-warning" size="sm">
          ✔
        </Button>
        <Button
          onClick={handleCancelClick}
          type="submit"
          variant="outline-success"
          size="sm"
        >
          Cancel
        </Button>
      </td>
    </tr>
  );
}
