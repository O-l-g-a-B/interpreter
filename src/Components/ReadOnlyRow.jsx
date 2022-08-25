import { Button } from "react-bootstrap";

export default function RedOnlyRow({ word, idx, handleEditClick }) {
  return (
    <>
      <tr key={word.id}>
        <td>{idx + 1}</td>
        <td>{word.english}</td>
        <td>{word.transcription}</td>
        <td>{word.russian}</td>
        <td>
          <Button
            onClick={(event) => handleEditClick(event, word)}
            variant="warning"
            size="sm"
          >
            🖉
          </Button>
        </td>
      </tr>
    </>
  );
}
