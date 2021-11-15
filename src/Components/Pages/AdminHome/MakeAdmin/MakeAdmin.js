import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            }
            )
        e.preventDefault();
    }

    return (
        <section className="container-fluid p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-center mb-5">Available Users List</h4>
                        <div className="table-responsive p-3">
                            <table className="table table-borderless" style={{ verticalAlign: "middle" }}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user =>
                                            <tr key={user._id}>
                                                <td>{user.displayName}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-center mb-5">Make New Admin</h4>
                        <form onSubmit={handleMakeAdmin}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleOnBlur} type="email" className="form-control form-control-lg rounded-0" placeholder="Enter Email to make admin" />
                            </div>
                            <div className="float-end">
                                <button className="btn btn-primary rounded-0">Make Admin</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;