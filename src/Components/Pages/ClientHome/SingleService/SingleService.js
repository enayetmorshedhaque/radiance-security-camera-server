import React from 'react';
import { Link } from 'react-router-dom';
import Checkout from '../CheckOut/Checkout';

const SingleService = (props) => {
    const { name, image, _id } = props.SingleService;

    return (
        <div className="col-lg-4 col-md-4 col-12 p-2">
            <div className="card shadow p-3 rounded-0 border-0">
                <div className="row g-2 align-items-center">
                    <div className="col-md-4">
                        <img src={image} alt={name} className="rounded-start img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body border-0 pb-0">
                            <div className="px-1 py-0">
                                <h6 className="card-title text-center fw-bold text-uppercase text-dark">
                                    {name}
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent text-center border-0 py-2">
                            <Link to={`/product/${_id}`} className="text-decoration-none">
                                <button className="btn btn-outline-primary rounded-0">
                                    Purchase Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;