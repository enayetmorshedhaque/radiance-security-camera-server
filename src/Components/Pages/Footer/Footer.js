import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../Images/Logo/logo.png'
import footerImage from '../../../Images/Footer/surjopay-footer.png'


const Footer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <footer className="container-fluid p-0 m-0 bg-default">
            <div className="container px-3 pt-5 pb-3">
                <div className="row">
                    <div className="col-md-3 mb-2 d-flex justify-content-center align-content-center">
                        <div className="d-flex justify-content-center align-content-center">
                            <img src={logo} alt="" className="img-fluid p-0" />
                        </div>
                    </div>
                    <div className="col-md-9 mb-2">
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <h5 className="fw-bold mb-4 text-uppercase">products</h5>
                                <ul className="list-unstyled">
                                    {
                                        products.map(
                                            product => <li className="mb-1" key={product._id}>
                                                <NavLink to={`/product/${product._id}`} className="text-decoration-none link-animation">{product.name}</NavLink>
                                            </li>
                                        ).slice(0, 6)
                                    }
                                </ul>
                            </div>
                            <div className="col-md-3 mb-2">
                                <h5 className="fw-bold mb-4 text-uppercase">solutions</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-1">
                                        <NavLink to="/traffic" className="text-decoration-none link-animation">Traffic</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/transportation" className="text-decoration-none link-animation">Transportation</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/building" className="text-decoration-none link-animation">Building</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/retail" className="text-decoration-none link-animation">Retail</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/banking-&-finance" className="text-decoration-none link-animation">Banking & Finance</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/critical-infrastructure" className="text-decoration-none link-animation">Critical Infrastructure</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 mb-2">
                                <h5 className="fw-bold mb-2 text-uppercase">about us</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-1">
                                        <NavLink to="/about-us" className="text-decoration-none link-animation">Introduction</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/our-commitments" className="text-decoration-none link-animation">Our Commitments</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/contact-us" className="text-decoration-none link-animation">Contact Us</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/corporate-responsibility" className="text-decoration-none link-animation">Corporate Responsibility</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/social-responsibility" className="text-decoration-none link-animation">Social Responsibility</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="/trademark-usage-guideline" className="text-decoration-none link-animation">Trademark Use Guideline</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 mb-2">
                                <div className="mb-3">
                                    <h5 className="fw-bold mb-2 text-uppercase">information</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-1">
                                            <NavLink to="/privacy-policy" className="text-decoration-none link-animation">Privacy & Policy</NavLink>
                                        </li>
                                        <li className="mb-1">
                                            <NavLink to="/faq" className="text-decoration-none link-animation">FAQ's</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <h5 className="fw-bold mb-2">FIND US</h5>
                                <ul className="list-group list-group-horizontal mb-3">
                                    <li className="list-group-item facebook">
                                        <NavLink to="/" className="text-decoration-none text-dark">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </NavLink>
                                    </li>
                                    <li className="list-group-item instagram">
                                        <NavLink to="/" className="text-decoration-none text-dark">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </NavLink>
                                    </li>
                                    <li className="list-group-item whatsapp">
                                        <NavLink to="/" className="text-decoration-none text-dark">
                                            <FontAwesomeIcon icon={faWhatsapp} />
                                        </NavLink>
                                    </li>
                                    <li className="list-group-item youtube">
                                        <NavLink to="/" className="text-decoration-none text-dark">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <img src={footerImage} alt="" className="img-fluid" />
                </div>
                <hr />
                <div className="container">
                    <div className="text-center">
                        &copy; 2021 <NavLink to="/" className="text-decoration-none text-muted">Radiance Security Camera</NavLink>. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;