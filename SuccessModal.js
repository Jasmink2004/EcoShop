import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SuccessModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Payment Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your payment was successful! Thank you for shopping sustainably.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onHide}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default SuccessModal;
