import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const AddProduct = ({ show, onClose, data }) => {

    return (
        <>
            <Modal show={show} onHide={onClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="productName">
                                    <Form.Label>Product Name <span style={{ 'color': 'red' }}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Product Name" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="productSubTitle">
                                    <Form.Label>Product Sub Title</Form.Label>
                                    <Form.Control type="text" placeholder="Product Sub Title" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="productCode">
                                    <Form.Label>Product code</Form.Label>
                                    <Form.Control type="text" placeholder="Product Code" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="quantity">
                                    <Form.Label>Quantity <span style={{ 'color': 'red' }}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="100" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="sellerPrice">
                                    <Form.Label>Seller Price <span style={{ 'color': 'red' }}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Seller Price" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="customerPrice">
                                    <Form.Label>Customer Price <span style={{ 'color': 'red' }}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Customer Price" />
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

export default AddProduct;