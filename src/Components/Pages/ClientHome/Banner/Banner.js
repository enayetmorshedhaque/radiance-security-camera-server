import React from 'react';
import BannerOne from '../../../../Images/BannerImages/BannerOne.jpg'
import BannerTwo from '../../../../Images/BannerImages/BannerTwo.jpg'
import BannerThree from '../../../../Images/BannerImages/BannerThree.jpg'
import BannerFour from '../../../../Images/BannerImages/BannerFour.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={BannerOne} className="d-block w-100" alt="Banner 1" />
                    <div className="carousel-caption d-md-block">
                        <h3 className="text-uppercase text-center">building a digital future</h3>
                        <Link to="/products">
                            <button className="btn btn-outline-light bt-lg px-3 py-2 rounded-0">Explore Products <FontAwesomeIcon icon={faArrowRight} /> </button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={BannerTwo} className="d-block w-100" alt="Banner 2" />
                    <div className="carousel-caption d-md-block">
                        <h3 className="text-uppercase text-center">open platform cameras</h3>
                        <Link to="/products">
                            <button className="btn btn-outline-light bt-lg px-3 py-2 rounded-0">Explore Products <FontAwesomeIcon icon={faArrowRight} /> </button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={BannerThree} className="d-block w-100" alt="Banner 3" />
                    <div className="carousel-caption d-md-block">
                        <h3 className="text-uppercase text-center">3-in-1 full color camera</h3>
                        <Link to="/products">
                            <button className="btn btn-outline-light bt-lg px-3 py-2 rounded-0">Explore Products <FontAwesomeIcon icon={faArrowRight} /> </button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={BannerFour} className="d-block w-100" alt="Banner 4" />
                    <div className="carousel-caption d-md-block">
                        <h3 className="text-uppercase text-center">Tech Month Featuring Ziczac</h3>
                        <Link to="/products">
                            <button className="btn btn-outline-light bt-lg px-3 py-2 rounded-0">Explore Products <FontAwesomeIcon icon={faArrowRight} /> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;