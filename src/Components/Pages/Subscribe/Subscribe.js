import React from 'react';

const Subscribe = () => {
    return (
        <section className="container-fluid p-3">
            <div className="container py-5 card shadow border-0 rounded-0">
                <div className="mx-auto text-center">
                    <h3 className="fs-2">Subscribe to the Our newsletter</h3>
                    <p className="p-2">
                        By entering your email address you will always be up to date with the latest Radiance Security Camera news
                        and promotions. At any time you can complete your registration and create your profile on Radiance Security Camera
                        section to receive personalized communications and access all features.</p>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mx-auto p-4">
                            <form >
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg rounded-0" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-primary rounded-0" type="submit" id="button-addon2">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;