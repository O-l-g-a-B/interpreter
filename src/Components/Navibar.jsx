import React from 'react';
import { Navbar, Form } from 'react-bootstrap';

export default function NaviBar() {

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><h1>Interpreter</h1></Navbar.Brand>
            <Form.Floating>
                <Form.Control
                    type="text"
                    placeholder="Search..."
                />
                <label>Search...</label>
            </Form.Floating>
        </Navbar>
    )
}