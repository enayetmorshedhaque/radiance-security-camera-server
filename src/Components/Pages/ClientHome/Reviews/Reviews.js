import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Reviews = () => {
    return (
        <section className="container-fluid p-3">
            <div className="text-center mb-5 happy-clients-heading">
                <h1 className="display-4 fw-bold heading-color">Happy <span style={{ color: "#E76F51" }}>Clients says</span>
                </h1>
            </div>
            <div className="row gy-2">
                <div className="col-lg-4 col-md-4 col-12 p-4">
                    <div className="card-group shadow-lg p-3 rounded-3">
                        <div className="card text-center border-0">
                            {/* <img src="images/user-1.png" className="rounded-circle my-3 happy-clients-img" alt="..."> */}
                            <div className="card-body ps-1 py-3 lh-base">
                                <p className="card-text fw-light">Easy to use, great service and a great way to get design
                                    work product.The collaborative creativity of dozens of great designers is extremely
                                    powerful.</p>
                                <span className="ratings">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <div className="user-info mt-4">
                                    <h6 className="user-name fw-bold m-0">John Albert</h6>
                                    <small className="user-profession">Banker</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-12 p-4">
                    <div className="card-group shadow-lg p-3 rounded-3">
                        <div className="card text-center border-0">
                            {/* <img src="images/user-2.png" className="rounded-circle my-3 happy-clients-img" alt="..."> */}
                            <div className="card-body ps-1 py-3 lh-base">
                                <p className="card-text fw-light">Easy to use, great service and a great way to get design
                                    work product.The collaborative creativity of dozens of great designers is extremely
                                    powerful.</p>
                                <span className="ratings">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <div className="user-info mt-4">
                                    <h6 className="user-name fw-bold m-0">Natosha Augastin</h6>
                                    <small className="user-profession">Corporate HR</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-12 p-4">
                    <div className="card-group shadow-lg p-3 rounded-3">
                        <div className="card text-center border-0">
                            {/* <img src="images/user-3.jpg" className="rounded-circle my-3 happy-clients-img" alt="..."> */}
                            <div className="card-body ps-1 py-3 lh-base">
                                <p className="card-text fw-light">Easy to use, great service and a great way to get design
                                    work product.The collaborative creativity of dozens of great designers is extremely
                                    powerful.</p>
                                <span className="ratings">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <div className="user-info mt-4">
                                    <h6 className="user-name fw-bold m-0">Regina Miles</h6>
                                    <small className="user-profession">Bike Racer</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;