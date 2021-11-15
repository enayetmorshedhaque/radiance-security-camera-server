import React, { useRef } from 'react';

const AddNewProduct = () => {
    const serviceNameRef = useRef();
    const serviceImageRef = useRef();
    const servicePriceRef = useRef();
    const serviceDescriptionRef = useRef();

    const handleAddNewService = e => {
        const name = serviceNameRef.current.value;
        const image = serviceImageRef.current.value;
        const price = servicePriceRef.current.value;
        const description = serviceDescriptionRef.current.value;

        const addService = { name, image, price, description };

        // send add new product data to server
        fetch('http://localhost:5000/add-new-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                serviceNameRef.current.value = '';
                serviceImageRef.current.value = '';
                servicePriceRef.current.value = '';
                serviceDescriptionRef.current.value = '';

                // Product Added Successfully Alert
                const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
                const alertTrigger = document.getElementById('liveAlertBtn')

                function alert(message, type) {
                    const wrapper = document.createElement('div')
                    wrapper.innerHTML = '<div className="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

                    alertPlaceholder.append(wrapper)
                }

                if (alertTrigger) {
                    alertTrigger.addEventListener('click', function () {
                        alert('Product Added Successfully!', 'success')
                    })
                }
            });

        e.preventDefault();
    }

    return (
        [
            <section className="container-fluid p-3">
                <div className="text-center mb-5 happy-clients-heading">
                    <h4 className="fw-bold">Add New Product</h4>
                </div>
                <form onSubmit={handleAddNewService}>
                    <div className="row gy-2">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="mb-3">
                                <label className="form-label">Product Name</label>
                                <input type="text" ref={serviceNameRef} className="form-control form-control-lg rounded-0" placeholder="Enter Product Name" required />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="mb-3">
                                <label className="form-label">Product Image</label>
                                <input type="text" ref={serviceImageRef} className="form-control form-control-lg rounded-0" placeholder="Enter Product Image URL" required />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="mb-3">
                                <label className="form-label">Product Price</label>
                                <input type="number" ref={servicePriceRef} className="form-control form-control-lg rounded-0" placeholder="Enter Product Price" required />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="mb-3">
                                <label className="form-label">Product Overview</label>
                                <textarea name="" ref={serviceDescriptionRef} className="form-control form-control-lg rounded-0" id="" cols="30" rows="8" placeholder="Enter Product Overview"></textarea>
                            </div>
                        </div>

                    </div>
                    <button id="liveAlertBtn" className="btn btn-outline-primary btn-lg rounded-0 float-end" type="submit">Add New Product</button>
                </form>
            </section>,
            <section className="p-5">
                <div id="liveAlertPlaceholder"></div>
            </section>
        ]
    );
};

export default AddNewProduct;