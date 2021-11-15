import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../Images/Logo/logo.png'
const Header = () => {

    const { user, handleSignOut, admin } = useAuth();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" className="img-fluid" width="70" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Explore</Link>
                            </li>
                            {
                                user.email && !admin && <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/my-orders">My Orders</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart">Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/pay">Pay</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/review">Review</Link>
                                    </li>
                                </>
                            }
                            {
                                admin && <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/manage-orders">Manage All Orders</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/add-new-product">Add A Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/make-admin">Make Admin</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/manage-products">Manage Products</Link>
                                    </li>
                                </>
                            }
                        </ul>
                        {
                            user?.email ?
                                <form className="d-flex align-items-center">
                                    <small className="text-dark fs-6 me-4">Welcome Back! {user.displayName}</small>
                                    <Link to="/" className="text-decoration-none">
                                        <button onClick={handleSignOut} className="btn btn-outline-primary fw-bold px-4 py-2 rounded-pill" type="submit">Logout</button>
                                    </Link>
                                </form>
                                :
                                <form className="d-flex">
                                    <Link to="/login" className="text-decoration-none">
                                        <button className="btn btn-outline-primary fw-bold px-4 py-2 rounded-pill" type="submit"><FontAwesomeIcon icon={faSignInAlt} />  &nbsp;Login</button>
                                    </Link>
                                </form>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;