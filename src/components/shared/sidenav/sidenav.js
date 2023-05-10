import React from "react";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faHistory, faList, faUserAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const sidenav = () => {
    return (
        <>
            <ul className="nav flex-column nav-ul">
                <li className="nav-item">
                    <Link to="dashboard" className="nav-link active" aria-current="page">
                        <FontAwesomeIcon icon={faDashboard} size={'1x'} /> Dashboard </Link>
                </li>
                <li className="nav-item">
                    <Link to="invoice" className="nav-link"><FontAwesomeIcon icon={faFileInvoice} size={'1x'} /> Invoice</Link>
                </li>
                <li className="nav-item">
                    <Link to="customers" className="nav-link"><FontAwesomeIcon icon={faUsers} size={'1x'} /> Customers</Link>
                </li>
                <li className="nav-item">
                    <Link to="suppliers" className="nav-link"><FontAwesomeIcon icon={faUserAlt} size={'1x'} /> Suppliers</Link>
                </li>
                <li className="nav-item">
                    <Link to="products" className="nav-link"><FontAwesomeIcon icon={faList} size={'1x'} /> Products</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><FontAwesomeIcon icon={faHistory} size={'1x'} /> History</a>
                </li>
            </ul>
        </>
    )
}

export default sidenav;