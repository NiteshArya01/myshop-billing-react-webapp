import React, { useState } from "react";
import { faEdit, faPlus, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddInvoice from "./Add-invoice";

const InvoiceList = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);


    const openModal = (data) => {
        setModalData(data);
        setShowModal(true);
    }
    const closeModal = () => {
        setModalData(null);
        setShowModal(false);
    }

    const data = {}
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-12 text-end">
                    <button className="btn-custom" onClick={() => openModal(data)}><FontAwesomeIcon icon={faPlus} /> Add</button>
                </div>
            </div>

            <h5 className="mt-4" >Invoice List</h5><hr></hr>
            <div className="row">
                <div className="col-md-3">
                    <input className="form-control" placeholder="Search Invoice" />
                </div>
                <div className="col-md-3">
                    <select className="form-control">
                        <option value="Month">All</option>
                        <option value="Month">Only Due</option>
                        <option value="Month">Not Due</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <input className="form-control" type="date" />
                </div>
                <div className="col-md-3 text-end">
                    <button className="btn-custom"><FontAwesomeIcon icon={faSearch} /> Search</button>
                </div>
            </div>
            <table className="table table-hover mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col" className="text-center">Invoice Type</th>
                        <th scope="col" className="text-center">Total Amount</th>
                        <th scope="col" className="text-center">Paid Amount</th>
                        <th scope="col" className="text-center">Due Amount</th>
                        <th scope="col">Date</th>
                        <th scope="col" className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Harindra Sharama</td>
                        <td className="text-center"><small style={{ 'background': '#FF9F43', 'padding': '2px 10px 2px 10px', 'color': '#fff', 'borderRadius': '5px', 'fontSize': '12px' }}>Customer</small></td>
                        <td className="text-center">₹ 12400</td>
                        <td className="text-center">₹ 9400</td>
                        <td className="text-center">₹ 3000</td>
                        <td>26-4-2023</td>
                        <td className="text-center">
                            <FontAwesomeIcon icon={faEdit} color="#28C76F" />&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} color="#dc3545" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Harindra Sharama</td>
                        <td className="text-center" ><small style={{ 'background': '#28C76F', 'padding': '2px 10px 2px 10px', 'color': '#fff', 'borderRadius': '5px', 'fontSize': '12px' }}>Seller</small></td>
                        <td className="text-center">₹ 12400</td>
                        <td className="text-center">₹ 9400</td>
                        <td className="text-center">₹ 3000</td>
                        <td>26-4-2023</td>
                        <td className="text-center">
                            <FontAwesomeIcon icon={faEdit} color="#28C76F" />&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} color="#dc3545" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Harindra Sharama</td>
                        <td className="text-center" ><small style={{ 'background': '#FF9F43', 'padding': '2px 10px 2px 10px', 'color': '#fff', 'borderRadius': '5px', 'fontSize': '12px' }}>Customer</small></td>
                        <td className="text-center">₹ 12400</td>
                        <td className="text-center">₹ 9400</td>
                        <td className="text-center">₹ 3000</td>
                        <td>26-4-2023</td>
                        <td className="text-center">
                            <FontAwesomeIcon icon={faEdit} color="#28C76F" />&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} color="#dc3545" />
                        </td>
                    </tr>
                </tbody>
            </table>


            {/* Add Invoice  */}
            <AddInvoice show={showModal} onClose={closeModal} data={modalData} />

        </div>
    )
}

export default InvoiceList;