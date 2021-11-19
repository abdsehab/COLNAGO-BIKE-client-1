import React from 'react';
import useAuth from './../../../Hooks/useAuth.js';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { allContexts } = useAuth();
    const { user, loading } = allContexts;
    if (loading) {
        return (
            <div className="text-center my-5 py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    console.log(loading);
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: location }
                    }}
                ></Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;
