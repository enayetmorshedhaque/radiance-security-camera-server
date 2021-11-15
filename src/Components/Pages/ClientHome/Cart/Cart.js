import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Cart = () => {
    const { user } = useAuth();
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/cart`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [])

    return (
        <section className="container-fluid py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mb-5">
                        <div className="card shadow rounded-0 border-0">
                            <div className="table-responsive p-3">
                                <table className="table table-borderless" style={{ verticalAlign: "middle" }}>
                                    <thead>
                                        <tr>
                                            <th width="30%">Product</th>
                                            <th width="25%">Quantity</th>
                                            <th width="15%">Price</th>
                                            <th width="20%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="row align-items-center">
                                                    <div className="col-md-4">
                                                        <img src="https://i.ibb.co/6yp7W6s/Network-Cameras.png" className="rounded-3" height="50" width="70" />
                                                    </div>
                                                    <div className="col-md-8">
                                                        {cartProducts}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="input-group w-75">
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-primary rounded-0" data-type="minus">
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </button>
                                                    </span>
                                                    <input type="text" value="1" className="form-control text-center" />
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-primary rounded-0" data-type="plus">
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>1599</td>
                                            <td>
                                                <button className="btn btn-danger rounded-0 px-3 py-2"><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="row align-items-center">
                                                    <div className="col-md-4">
                                                        <img src="https://i.ibb.co/6yp7W6s/Network-Cameras.png" className="rounded-3" height="50" width="70" />
                                                    </div>
                                                    <div className="col-md-8">
                                                        ACCESS CONTROL
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="input-group w-75">
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-primary rounded-0" data-type="minus">
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </button>
                                                    </span>
                                                    <input type="text" value="1" className="form-control text-center" />
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-primary rounded-0" data-type="plus">
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>1599</td>
                                            <td>
                                                <button className="btn btn-danger rounded-0 px-3 py-2"><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow rounded-0 border-0">
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
                                    <p>Total:</p>
                                    <p className="fw-bold">4490</p>
                                </div>
                            </div>
                            <div className="pb-4 px-3 text-center">
                                <Link to="/checkout">
                                    <button className="btn btn-outline-primary">Proceed to Checkout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;