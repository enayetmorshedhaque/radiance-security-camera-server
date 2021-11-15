import { faStar as faStarFilled } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarNotFilled } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Checkout from '../CheckOut/Checkout';

const SingleProduct = () => {
    const [product, setProduct] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <section className="container-fluid p-3">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src={product.image} />
                </div>
                <div className="col-md-6">
                    <h1 className="fw-bold">{product.name}</h1>
                    <div className="mb-3">
                        <FontAwesomeIcon style={{ color: "orange", marginRight: "5px" }} icon={faStarFilled} />
                        <FontAwesomeIcon style={{ color: "orange", marginRight: "5px" }} icon={faStarFilled} />
                        <FontAwesomeIcon style={{ color: "orange", marginRight: "5px" }} icon={faStarFilled} />
                        <FontAwesomeIcon style={{ color: "orange", marginRight: "5px" }} icon={faStarFilled} />
                        <FontAwesomeIcon style={{ color: "orange" }} icon={faStarNotFilled} />
                    </div>

                    <h3 className="fw-bold">Price: <span>$ {product.price}</span></h3>
                    <h5>Product availability: <span>{product.availability}</span> </h5>
                    {
                        (product.availability === 'in stock') ?
                            <Link to="/cart">
                                <button className="btn btn-outline-primary rounded-0">Add To Cart</button>
                            </Link>
                            :
                            <Link to="/home">
                                <button className="btn btn-outline-primary rounded-0">Request For Product</button>
                            </Link>
                    }
                </div>
                <div className="col-md-12 p-5" style={{ textAlign: "justify" }}>
                    <h5 className="fw-bold">Description</h5>
                    <p>{product.description}</p>
                </div>
            </div>
        </section >
    );
};

export default SingleProduct;