import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';

const words =
    [{ "id": "11350", "english": "arm", "transcription": "[ ɑ:m ]", "russian": "рука", "tags": "часть тела", "tags_json": "[\"u0447u0430u0441u0442u044c u0442u0435u043bu0430\"]" }, { "id": "11397", "english": "tea", "transcription": "[ tiː  ]", "russian": "чай", "tags": "напиток", "tags_json": "[\"u043du0430u043fu0438u0442u043eu043a\"]" }, { "id": "11452", "english": "beach", "transcription": "[biːtʃ]", "russian": "пляж", "tags": "места", "tags_json": "[\"u043cu0435u0441u0442u0430\"]" }, { "id": "11509", "english": "apple", "transcription": "[æpl]", "russian": "яблоко", "tags": "фрукты", "tags_json": "[\"u0444u0440u0443u043au0442u044b\"]" }, { "id": "11538", "english": "arch", "transcription": "[ ɑːtʃ ]", "russian": "арка", "tags": "город", "tags_json": "[\"u0433u043eu0440u043eu0434\"]" }, { "id": "11539", "english": "bank", "transcription": "[ bæŋk ]", "russian": "банк", "tags": "город", "tags_json": "[\"u0433u043eu0440u043eu0434\"]" }, { "id": "11540", "english": "bar", "transcription": "[ bɑː ]", "russian": "бар", "tags": "развлечение", "tags_json": "[\"u0440u0430u0437u0432u043bu0435u0447u0435u043du0438u0435\"]" }, { "id": "11541", "english": "swimming pool", "transcription": "[ ˈswɪmɪŋ puːl ]", "russian": "бассейн", "tags": "город", "tags_json": "[\"u0433u043eu0440u043eu0434\"]" }, { "id": "11542", "english": "library", "transcription": "[ ˈlaɪbrəri ]", "russian": "библиотека", "tags": "город", "tags_json": "[\"u0433u043eu0440u043eu0434\"]" }, { "id": "11543", "english": "hospital", "transcription": "[ ˈhɒspɪtl̩ ]", "russian": "больница", "tags": "город", "tags_json": "[\"u0433u043eu0440u043eu0434\"]" }, { "id": "11560", "english": "scarlet", "transcription": "[ \/ˈskɑːlɪt\/ ]", "russian": "алый", "tags": "цвет", "tags_json": "[\"u0446u0432u0435u0442\"]" }]

function WordTabl(props) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr fixed="top">
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {words.map((props, idx) => (
                    <tr>
                        <td>{idx + 1}</td>
                        <td>{props.english}</td>
                        <td>{props.transcription}</td>
                        <td>{props.russian}</td>
                        <td>
                            <Button variant="success" size="sm">Save</Button>
                            <Button variant="warning" size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default WordTabl;
