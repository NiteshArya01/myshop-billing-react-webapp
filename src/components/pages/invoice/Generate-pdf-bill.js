import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Document, Page } from 'react-pdf';
const GeneratePdfBill = ({ show, onClose, data }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <Modal show={show} onHide={onClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Invoice Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn-custom-close" onClick={onClose}>Close</button> <button className="btn-custom">Print</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default GeneratePdfBill;