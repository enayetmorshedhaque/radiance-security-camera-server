import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from '../SingleService/SingleService';

const Services = () => {
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
            <div className="row gy-2 px-4">
                {
                    products.map(
                        product =>
                            <SingleService
                                SingleService={product}
                                key={product._id}
                            >
                            </SingleService>
                    )
                }
            </div>
        </section>
    );
};

export default Services;