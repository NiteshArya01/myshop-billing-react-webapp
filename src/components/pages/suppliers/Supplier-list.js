import React, { useState } from "react";
import { faEdit, faPlus, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddSupplier from "./Add-suppliers";

const SupplierList = () => {
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

            <h5 className="mt-4" >Supplier List</h5><hr></hr>
            <div className="row">
                <div className="col-md-3">
                    <input className="form-control" placeholder="Search customer" />
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
                        <th scope="col">Supllier Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col" className="text-center">Total Due</th>
                        <th scope="col" className="text-center">Total Invoice</th>
                        <th scope="col">Date</th>
                        <th scope="col" className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <div style={{ 'color': '#0da3f0' }}>Harindra Sharama</div>
                            <div style={{ 'color': '#41464b', 'fontSize': '12px' }}>AFGT-10DDF-2767-3636</div>
                        </td>
                        <td>Sikta</td>
                        <td >harindra@gmail.com</td>
                        <td >7689675456</td>
                        <td className="text-center">₹ 1200</td>
                        <td className="text-center">2</td>
                        <td>26-4-2023</td>
                        <td className="text-center">
                            <FontAwesomeIcon icon={faEdit} color="#28C76F" />&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} color="#dc3545" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>
                            <div style={{ 'color': '#0da3f0' }}>Ritesh Sharama</div>
                            <div style={{ 'color': '#41464b', 'fontSize': '12px' }}>AFGT-10DDF-2767-3636</div>
                        </td>
                        <td>Sikta</td>
                        <td >N/A</td>
                        <td >7689675456</td>
                        <td className="text-center">₹ 20,000</td>
                        <td className="text-center">1</td>
                        <td>26-4-2023</td>
                        <td className="text-center">
                            <FontAwesomeIcon icon={faEdit} color="#28C76F" />&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} color="#dc3545" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>
                            <div style={{ 'color': '#0da3f0' }}>Rahul</div>
                            <div style={{ 'color': '#41464b', 'fontSize': '12px' }}>AFGT-10DDF-2767-3636</div>
                        </td>
                        <td>Balthar sikta</td>
                        <td >N/A</td>
                        <td >N/A</td>
                        <td className="text-center">N/A</td>
                        <td className="text-center">2</td>
                        <td>26-4-2023</td>
                        <td className="text-center">
                            <FontAwesomeIcon icon={faEdit} color="#28C76F" />&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} color="#dc3545" />
                        </td>
                    </tr>
                </tbody>
            </table>


            {/* Add Customer  */}
            <AddSupplier show={showModal} onClose={closeModal} data={modalData} />

        </div>
    )
}

export default SupplierList;