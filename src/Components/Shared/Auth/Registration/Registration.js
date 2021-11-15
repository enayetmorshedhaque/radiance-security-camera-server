import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import RegisterImage from '../../../../Images/Auth/Register/register.jpg'

const Registration = () => {
    const [loginDetails, setLoginDetails] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginDetails = { ...loginDetails };
        newLoginDetails[field] = value;
        setLoginDetails(newLoginDetails);
    }

    const handleRegistration = e => {
        registerUser(loginDetails.email, loginDetails.password, loginDetails.name, history);
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
                                        <img src={RegisterImage} alt="Register Image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="my-3 text-center">
                                            <h4 className="p-0 m-0">Please Register</h4>
                                            <small className="text-muted">It will take only 1 minute</small>
                                        </div>
                                        <form onSubmit={handleRegistration}>
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input name="name" onBlur={handleOnBlur} type="text" className="form-control form-control-lg rounded-0" placeholder="John Doe" required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input name="email" onBlur={handleOnBlur} type="email" className="form-control form-control-lg rounded-0" placeholder="john@doe.com" required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input name="password" onBlur={handleOnBlur} type="password" className="form-control form-control-lg rounded-0" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                                            </div>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <small>Already Have an account? <Link to="/login" className="text-decoration-none text-danger">Login</Link> </small>
                                                <button className="btn btn-outline-primary rounded-0">Register</button>
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

export default Registration;