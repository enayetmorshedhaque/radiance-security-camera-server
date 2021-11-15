import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <section className="container-fluid p-3">
            <div className="text-center mb-5 happy-clients-heading">
                <h4 className="display-4 fw-bold heading-color">Our <span style={{ color: "#E76F51" }}>Products</span>
                </h4>
            </div>
            <div className="row gy-2">
                {
                    products.map(
                        product =>
                            <div className="col-lg-4 col-md-4 col-12 p-4" key={product._id}>
                                <div className="card shadow p-3 rounded-3">
                                    <img src={product.image} alt={product.name} className="card-img-top img-fluid" />
                                    <div className="card-body text-center border-0">
                                        <div className="px-3 py-0">
                                            <h6 className="card-title fw-bold text-uppercase text-dark">
                                                {product.name}
                                            </h6>
                                            <small className="card-text">
                                                {product.description.slice(0, 99)}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent text-center border-0 py-2">
                                        <Link to={`/product/${product._id}`} className="text-decoration-none">
                                            <button className="btn btn-outline-primary rounded-0">
                                                See Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    ).slice(0, 6)
                }
            </div>
        </section>
    );
};

export default HomeServices;