import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Checkout = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <section className="container-fluid p-3">
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card shadow mb-3 rounded-0 border-0">
                            <div className="p-4">
                                <h6 className="mb-4 text-center">Billing Details</h6>
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Title</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" placeholder="Enter Title" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" placeholder="Enter Name" value={user.displayName} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Email address</label>
                                                <input type="email" className="form-control form-control-lg rounded-0" placeholder="Enter Email" value={user.email} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Phone Number</label>
                                                <input type="number" className="form-control form-control-lg rounded-0" placeholder="0171234567890" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Delivery address</label>
                                                <textarea type="email" className="form-control form-control-lg rounded-0" placeholder="Enter Detail Address" rows="4"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">City</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" placeholder="Enter City" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">District</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" placeholder="Enter District" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">Zip Code</label>
                                                <input type="number" className="form-control form-control-lg rounded-0" placeholder="Enter Zip Code" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="py-4 px-3">
                            <div className="d-flex justify-content-between">
                                <p>Total Price:</p>
                                <p>4535</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Discount:</p>
                                <p>45</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Delivery Charge:</p>
                                <p>100</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Total:</p>
                                <p className="fw-bold">4490</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
                                    <label className="btn btn-outline-primary" htmlFor="btnradio1">Cash On Delivery System</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Online Payment System</label>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-3 rounded-0 border-0">
                            <div className="py-4 px-3">
                                <p>Have Coupon?</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Coupon" />
                                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Apply</button>
                                </div>
                            </div>
                        </div>
                        <Link to="/order-summary">
                            <div className="d-grid">
                                <button className="btn btn-lg btn-primary rounded-3">Place Order</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Checkout;