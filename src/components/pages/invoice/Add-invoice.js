import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import GeneratePdfBill from "./Generate-pdf-bill";
const AddInvoice = ({ show, onClose, data }) => {
    const [showPDFModal, setShowPDFModal] = useState(false);
    const [modalPDFData, setModalPDFData] = useState(null);

    const [showTab, setShowTab] = useState(true);
    const [inputFields, setInputFields] = useState([
        { name: '', quantity: '', price: '' }
    ])


    const openPDFModal = (data) => {
        setModalPDFData(data);
        setShowPDFModal(true);
    }
    const closePDFModal = () => {
        setModalPDFData(null);
        setShowPDFModal(false);
    }

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = (event) => {
        event.preventDefault();
        let newfield = { name: '', quantity: '', price: '' }

        setInputFields([...inputFields, newfield])
    }

    const removeFields = (event, index) => {
        event.preventDefault();
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(inputFields)
    }
    return (

        <>
            <Modal show={show} onHide={onClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="row">
                        <div className={showTab === true ? 'col-sm-3 text-center tab-style tab-active' : 'col-sm-3 text-center tab-style tab-inactive'} onClick={() => setShowTab(true)}>Customer</div>
                        <div className={showTab !== true ? 'col-sm-3 text-center tab-style tab-active' : 'col-sm-3 text-center tab-style tab-inactive'} onClick={() => setShowTab(false)}>Seller</div>
                        <div className="col-md-6 text-center tab-style"></div>
                    </div>
                    {
                        showTab ? (
                            <>
                                <Form className="mt-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="customerName">
                                                <Form.Label>Customer Name <span style={{ 'color': 'red' }}>*</span></Form.Label>
                                                <Form.Control type="text" placeholder="Customer Name" autoFocus />
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="phone">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control type="text" placeholder="Phone" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="address">
                                                <Form.Label>Address <span style={{ 'color': 'red' }}>*</span></Form.Label>
                                                <Form.Control as="textarea" rows={1} placeholder="Address" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 text-start">
                                            <h6>Product Details</h6>
                                        </div>
                                        <div className="col-sm-6 text-end">
                                            <button className="btn-addmore" onClick={addFields}>Add More</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">

                                            {inputFields.map((input, index) => {
                                                return (
                                                    <div className="row mt-2" key={index}>
                                                        <div className="col-md-5">
                                                            <select className="form-control" name='name' value={input.name}
                                                                onChange={event => handleFormChange(index, event)}>
                                                                <option value=''>Select</option>
                                                                <option value='dupatta'>Dupatta</option>
                                                                <option value='dupatta cotton'>Dupatta cotton</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input
                                                                className="form-control"
                                                                name='quantity'
                                                                placeholder='Quantity/Mtr'
                                                                value={input.quantity}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input
                                                                className="form-control"
                                                                name='price'
                                                                placeholder='Price'
                                                                value={input.price}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
                                                        <div className="col-md-1">
                                                            <button onClick={(event) => removeFields(event, index)} className="btn-remove text-end"><FontAwesomeIcon icon={faClose} color="red" /></button>
                                                        </div>

                                                    </div>
                                                )
                                            })}


                                            {/* <button onClick={submit}>Submit</button> */}
                                        </div>
                                    </div>
                                </Form>
                            </>
                        ) : (
                            <>
                                <Form className="mt-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="customerName">
                                                <Form.Label>Customer Name <span style={{ 'color': 'red' }}>*</span></Form.Label>
                                                <Form.Control type="text" placeholder="Customer Name" autoFocus />
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="gstin">
                                                <Form.Label>GSTIN /Adhar No.</Form.Label>
                                                <Form.Control type="text" placeholder="GSTIN/Adhar No" />
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
                                                <Form.Control as="textarea" rows={1} placeholder="Address" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 text-start">
                                            <h6>Product Details</h6>
                                        </div>
                                        <div className="col-sm-6 text-end">
                                            <button className="btn-addmore" onClick={addFields}>Add More</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">

                                            {inputFields.map((input, index) => {
                                                return (
                                                    <div className="row mt-2" key={index}>
                                                        <div className="col-md-5">
                                                            <select className="form-control" name='name' value={input.name}
                                                                onChange={event => handleFormChange(index, event)}>
                                                                <option value=''>Select</option>
                                                                <option value='dupatta'>Dupatta</option>
                                                                <option value='dupatta cutton'>Dupatta cotton</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input
                                                                className="form-control"
                                                                name='quantity'
                                                                placeholder='Quantity/Mtr.'
                                                                value={input.quantity}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input
                                                                className="form-control"
                                                                name='price'
                                                                placeholder='Price'
                                                                value={input.price}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
                                                        <div className="col-md-1">
                                                            <button onClick={(event) => removeFields(event, index)} className="btn-remove text-end"><FontAwesomeIcon icon={faClose} color="red" /></button>
                                                        </div>

                                                    </div>
                                                )
                                            })}


                                            {/* <button onClick={submit}>Submit</button> */}
                                        </div>
                                    </div>
                                </Form>
                            </>
                        )
                    }

                </Modal.Body>
                <Modal.Footer>
                    <button className="btn-custom-close" onClick={onClose}>Close</button>
                    <button className="btn-custom-preview" onClick={() => openPDFModal(data)}>Preview</button>
                    <button className="btn-custom" onClick={submit}>Submit</button>
                </Modal.Footer>
            </Modal>

            {/* Generate  Invoice  */}
            <GeneratePdfBill show={showPDFModal} onClose={closePDFModal} data={modalPDFData} />
        </>
    )
}

export default AddInvoice;