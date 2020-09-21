import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

export function HelpModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                How To Use
            </Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Basic Usage</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Reference String: Enter number [0-9] separated with ,<br/>
                    Frame Number: Enter number [0-9]<br/>
                    Reset Clock: For NRU, enter number [0-9]<br/>
                    Generate String: Generate 16 random number<br/>
                    Show/Hide swapped out memory: Choose to whether show/hide the swapped out memory illustration<br/>
                    Turn on/off animation: Toggle to turn on/off animation<br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
