import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    function handleLogin(event) {
        event.preventDefault();
        localStorage.setItem('company_name', 'fashion-point');
        navigate("/welcome");
    }
    return (
        <div className="wrapper">

            <div className="wrapper-left">
                {/* <img src={wrapperImage} alt="Image" className="wrapper-image" /> */}
            </div>
            <div className="wrapper-right">
                <div className="card sign-form">
                    <div className="card-body">
                        <h4 className="card-title">Efficiently Manage Your Business Finances.</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Login for Our Billing and Inventory Mangement System.</h6>
                        <h6 className="mt-4">Login</h6>
                        <form onSubmit={handleLogin}>
                            <div className="form-group mt-2">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group mt-2">
                                <div className="or-left"></div>
                                <div className="or-middle">OR</div>
                                <div className="or-right"></div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone" />
                            </div>
                            <div className="form-group mt-4">
                                <button className="btn btn-secondary" style={{ 'width': '100%' }}  >Login</button>
                            </div>
                            <Link to="/register" className="login-text" >I have't an account, Register</Link>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;