import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import LoginImage from '../../../../Images/Auth/Login/login.jpg'

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({});
    const { user, loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginDetails = { ...loginDetails };
        newLoginDetails[field] = value;
        setLoginDetails(newLoginDetails);
    }

    const handleLogin = e => {
        loginUser(loginDetails.email, loginDetails.password, location, history);
        e.preventDefault();
    }

    return (
        <section className="vh-100">
            <div className="container vh-100">
                <div className="row vh-100">
                    <div className="col-12 my-auto">
                        <div className="card shadow rounded-0 border-0">
                            <div className="card-body py-5">
                                <div className="row align-items-center">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-4">
                                        <img src={LoginImage} alt="Register Image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="my-3 text-center">
                                            <h4 className="p-0 m-0">Welcome Back</h4>
                                        </div>
                                        <form onSubmit={handleLogin}>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input onBlur={handleOnBlur} name="email" type="email" className="form-control form-control-lg rounded-0" placeholder="john@doe.com" required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input onBlur={handleOnBlur} name="password" type="password" className="form-control form-control-lg rounded-0" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                                            </div>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <small>No account? <Link to="/register" className="text-decoration-none text-danger">Create Now</Link></small>
                                                <button className="btn btn-outline-primary rounded-0">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;