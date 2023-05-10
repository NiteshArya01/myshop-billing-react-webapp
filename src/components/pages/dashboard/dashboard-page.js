import { faCartArrowDown, faFileArrowDown, faFileInvoice, faFileInvoiceDollar, faFilter, faFilterCircleDollar, faFilterCircleXmark, faMessage, faMoneyBill, faPrint, faSeedling, faShare, faUserAlt, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Chart } from "react-google-charts";

const DashboardPage = () => {
    const data = [
        ["Year", "Purchase", "Sales"],
        ["Jan", 1000, 400],
        ["Feb", 1170, 460],
        ["Mar", 660, 1120],
        ["Apr", 1030, 540],
        ["May", 1030, 540],
        ["Jun", 1030, 540],
        ["Jul", 1030, 540],
        ["Aug", 1030, 540],
        ["Sep", 1030, 540],
        ["Oct", 1030, 540],
        ["Nov", 1030, 540],
        ["Dec", 1030, 540],
    ];

    const options = {
        title: "Purchase & Sales",
        curveType: "function",
        colors: ['#28c76f', '#ea5455'],
        legend: { position: "bottom" },
        // chartArea: { left: 10, top: 10, bottom: 10, right: 10, width: "100%", height: "100%" }
    };
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 text-start">
                    <button className="btn-custom">New Invoice</button>
                </div>
                <div className="col-md-6 text-end">

                    <select className="filter-type">
                        <option value="Month">Year</option>
                        <option value="Month">Month</option>
                        <option value="Month">Weak</option>
                        <option value="Month">Custom</option>
                    </select>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div style={{ 'width': '70px', 'float': 'left', }}>
                                    <FontAwesomeIcon icon={faCartArrowDown} size={'3x'} color="#FF9F43" />
                                </div>
                                <div style={{ 'width': 'calc(100% - 70px)', 'float': 'left', }}>
                                    <h5 className="card-title">100</h5>
                                    <p className="card-text">Total Purchase Due</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div style={{ 'width': '70px', 'float': 'left', }}>
                                    <FontAwesomeIcon icon={faMoneyBill} size={'3x'} color="#28C76F" />
                                </div>
                                <div style={{ 'width': 'calc(100% - 70px)', 'float': 'left', }}>
                                    <h5 className="card-title">100</h5>
                                    <p className="card-text">Total Sales Due</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div style={{ 'width': '70px', 'float': 'left', }}>
                                    <FontAwesomeIcon icon={faFileArrowDown} size={'3x'} color="#ea5455" />
                                </div>
                                <div style={{ 'width': 'calc(100% - 70px)', 'float': 'left', }}>
                                    <h5 className="card-title">100</h5>
                                    <p className="card-text">Total Sale Amount</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mt-4">
                <div className="col-lg-7 col-md-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="card">
                                <div className="card-body customers-card">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h5 className="card-title">100</h5>
                                        </div>
                                        <div className="col-md-4">
                                            <FontAwesomeIcon icon={faUserAlt} size={'2x'} />
                                        </div>
                                    </div>
                                    <p className="card-text">Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card">
                                <div className="card-body suppliers-card">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h5 className="card-title">100</h5>
                                        </div>
                                        <div className="col-md-4">
                                            <FontAwesomeIcon icon={faUserCheck} size={'2x'} />
                                        </div>
                                    </div>
                                    <p className="card-text">Suppliers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-6 col-md-6">
                            <div className="card">
                                <div className="card-body purchase-invoice-card">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h5 className="card-title">100</h5>
                                        </div>
                                        <div className="col-md-4">
                                            <FontAwesomeIcon icon={faFileInvoiceDollar} size={'2x'} />
                                        </div>
                                    </div>
                                    <p className="card-text">Purchase Invoice</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card">
                                <div className="card-body sales-invoice-card">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h5 className="card-title">100</h5>
                                        </div>
                                        <div className="col-md-4">
                                            <FontAwesomeIcon icon={faFileInvoice} size={'2x'} />
                                        </div>
                                    </div>
                                    <p className="card-text">Sales Invoice</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div style={{ 'background': '#fff', 'width': '100%', 'border': '1px solid rgb(210 210 210)', 'borderRadius': '5px' }}>
                                <Chart
                                    style={{ 'margin': 'auto', 'padding': '5px' }}
                                    chartType="Bar"
                                    width="100%"
                                    height="300px"
                                    data={data}
                                    options={options}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Recently Generated Invoice</h5>
                            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}

                            <table className="table invoice-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col" className="text-center">Amount</th>
                                        <th scope="col" className="text-center">Date</th>
                                        <th scope="col" className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td className="text-center">1200</td>
                                        <td className="text-center">23-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td className="text-center">4000</td>
                                        <td className="text-center">23-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td className="text-center">4590</td>
                                        <td className="text-center">26-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td className="text-center">4590</td>
                                        <td className="text-center">26-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td className="text-center">4590</td>
                                        <td className="text-center">26-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td className="text-center">4590</td>
                                        <td className="text-center">26-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td className="text-center">4590</td>
                                        <td className="text-center">26-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Larry</td>
                                        <td className="text-center">4590</td>
                                        <td className="text-center">26-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td className="text-center">4590</td>
                                        <td className="text-center">26-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td className="text-center">4590</td>
                                        <td className="text-center">26-4-2023</td>
                                        <td className="text-center">
                                            <FontAwesomeIcon icon={faPrint} style={{ 'color': '#1B2850', 'cursor': 'pointer' }} />&nbsp;&nbsp;<FontAwesomeIcon icon={faShare} style={{ 'color': '#28C76F', 'cursor': 'pointer' }} />
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="table-footer">
                                <span className="btn-show-more">Show More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">


            </div>
        </div>
    )
}

export default DashboardPage;