import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import Pay from '../../../Pages/ClientHome/Pay/Pay';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) { return <Spinner></Spinner> }
    return (
        <Route {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>
                )
            }
        />
    );
};

export default PrivateRoute;