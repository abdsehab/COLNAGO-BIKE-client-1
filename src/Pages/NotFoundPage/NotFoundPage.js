import React from "react";
import { NavLink } from "react-router-dom";
import icon404 from './../../Assets/404.png';

const NotFound = () => {
    return (
        <div
            style={{
                height: "91vh",

                backgroundColor: "#1C1C1C",
                backgroundAttachment: "fixed",
            }}
            className="d-flex justify-content-center align-items-center"
        >
            <div className="text-center my-5">
                <img src={icon404} alt="" />
                <h4 className="text-white mt-5">OOPS! THAT PAGE CAN’T BE FOUND.</h4>
                <p className="text-muted">
                    The page you are looking is not available or has been removed. Try going to Home Page by using the button below.
                </p>
                <NavLink to="/home">
                    <button className="btn btn-primary">GO TO HOME PAGE</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;