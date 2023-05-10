import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
const AddCustomer = ({ show, onClose, data }) => {

    return (
        <>
            <Modal show={show} onHide={onClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="customerName">
                                    <Form.Label>Customer Name <span style={{ 'color': 'red' }}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Customer Name" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Email" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Phone" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address <span style={{ 'color': 'red' }}>*</span></Form.Label>
                                    <Form.Control as="textarea" rows={2} placeholder="Address" />
                                </Form.Group>
                            </div>
                        </div>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn-custom-close" onClick={onClose}>Close</button> <button className="btn-custom">Submit</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCustomer;