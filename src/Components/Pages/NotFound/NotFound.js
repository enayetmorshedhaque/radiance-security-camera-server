import React from 'react';
import NotFoundImage from '../../../Images/NotFound/NotFound.jpg';

const NotFound = () => {
    return (
        <section className="p-0 m-0">
            <img src={NotFoundImage} className="img-fluid" />
        </section>
    );
};

export default NotFound;