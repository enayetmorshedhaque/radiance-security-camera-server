import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
    return (
        <section className="container-fluid py-5">
            <div className="container card border-0 rounded-0 shadow">
                <div className="py-5 px-3">
                    <div className="row  align-items-center justify-content-between mb-5">
                        <div className="col-md-3">
                            <div className="d-flex align-items-center">
                                <h6 className="fw-bold">Status:</h6>&nbsp;&nbsp;&nbsp;&nbsp;
                                <small className="rounded-pill text-white bg-primary py-3 w-50 text-center">
                                    Order Received
                                </small>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-3">
                            <Link to="/" className="text-decoration-none float-end text-dark">Back to Home</Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <div className="card border-1 px-4 py-3 bg-transparent">
                                <h6 className="fw-bold">Order Number</h6>
                                <small>sdlkjsahdf</small>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card border-1 px-4 py-3 bg-transparent">
                                <h6 className="fw-bold">Order Number</h6>
                                <small>sdlkjsahdf</small>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card border-1 px-4 py-3 bg-transparent">
                                <h6 className="fw-bold">Order Number</h6>
                                <small>sdlkjsahdf</small>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card border-1 px-4 py-3 bg-transparent">
                                <h6 className="fw-bold">Order Number</h6>
                                <small>sdlkjsahdf</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderSummary;