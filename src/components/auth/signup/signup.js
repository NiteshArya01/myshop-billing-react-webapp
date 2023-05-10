import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="wrapper">
            <div className="wrapper-left">
                {/* <img src={wrapperImage} alt="Image" className="wrapper-image" /> */}
            </div>
            <div className="wrapper-right">
                <div className="card sign-form">
                    <div className="card-body">
                        <h4 className="card-title">Efficiently Manage Your Business Finances.</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Register for Our Billing and Inventory Mangement System.</h6>
                        <h6 className="mt-4">Register</h6>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter company/shop name" />
                            </div>
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
                                <button type="submit" className="btn btn-secondary" style={{ 'width': '100%' }}>Register Now</button>
                            </div>
                            <Link to="/login" className="login-text">I have an account, Login</Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;