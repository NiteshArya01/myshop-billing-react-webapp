import React, { useState } from "react";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddProduct from "./Add-product";

const ProductList = () => {
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

            <h5 className="mt-4" >Product List</h5><hr></hr>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col" className="text-center">Quantity</th>
                        <th scope="col" className="text-center">Seller Price</th>
                        <th scope="col" className="text-center">Customer Price</th>
                        <th scope="col" className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Cutton Heavy Dupatta</td>
                        <td className="text-center">500</td>
                        <td className="text-center">₹ 84</td>
                        <td className="text-center">₹ 100</td>
                        <td className="text-center">
                            <FontAwesomeIcon icon={faEdit} color="#28C76F" />&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} color="#dc3545" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Cutton Dupatta</td>
                        <td className="text-center">400</td>
                        <td className="text-center">₹ 74</td>
                        <td className="text-center">₹ 90</td>
                        <td className="text-center">
                            <FontAwesomeIcon icon={faEdit} color="#28C76F" />&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} color="#dc3545" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ciffon Jhumka Dupatta</td>
                        <td className="text-center">570</td>
                        <td className="text-center">₹ 92</td>
                        <td className="text-center">₹ 110</td>
                        <td className="text-center">
                            <FontAwesomeIcon icon={faEdit} color="#28C76F" />&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} color="#dc3545" />
                        </td>
                    </tr>
                </tbody>
            </table>


            {/* Add Product  */}
            <AddProduct show={showModal} onClose={closeModal} data={modalData} />

        </div>
    )
}

export default ProductList;