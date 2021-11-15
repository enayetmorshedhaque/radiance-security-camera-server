import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        [
            <Banner></Banner>,
            <HomeServices></HomeServices>,
            <Reviews></Reviews>
        ]
    );
};

export default Home;