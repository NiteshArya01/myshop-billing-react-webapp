import React from "react";
import Header from "../shared/header/header";
import Sidenav from "../shared/sidenav/sidenav";
import { Outlet } from "react-router-dom";

const WrapperPage = () => {
    return (
        <>
            <div className=" wrapper-container">
                <Header />
                <div className="container-body">
                    <div className="side-nav">
                        <Sidenav />
                    </div>
                    <div className="section">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WrapperPage;