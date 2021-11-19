import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { faEnvelope, faUser, faLock, faLink } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth.js";
import byCycle from "./../../Assets/colnago_body.gif";

const SignUp = () => {
    const { allContexts } = useAuth();
    const { signUp, getName, getPassword, getEmail, error, getPhoto } = allContexts;
    return (
        <Container>
            <Row>
                <Col  sm={12} md={6}>
                <div className="text-center my-4">
            <h2>Please Sign Up</h2>
            <h5 className=" mt-2">Sign Up with Email & Password</h5>
            <p className="text-danger text-center">{error}</p>
            <div className="form-container mx-auto">
                <Form onSubmit={signUp}>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="name" visuallyHidden>
                                Your Name
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl required onBlur={getName} type="text" autoComplete="current-text" id="name" placeholder="Enter your name" /></InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email Address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl required onBlur={getEmail} type="email" autoComplete="current-email" id="email" placeholder="Enter your email address"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl required onBlur={getPassword} type="password" autoComplete="current-password" id="password" placeholder="Enter your password" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="name" visuallyHidden>
                                Your Profile Photo
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl required onBlur={getPhoto} type="text" autoComplete="current-text" id="photo" placeholder="Enter your real photo url" /></InputGroup>
                        </Col>
                    </Row>
                    <button type="submit" className="mt-2 w-100 btn-style">
                        Sign Up
                    </button>
                    <h6 className="m-3 text-danger">By creating an account, I agree to the Terms of Service, Privacy Policy, and Cookie Policy.</h6>
                    <button type="submit" className="mt-2 w-100 signup-btn">
                        <NavLink className="text-decoration-none text-white" to="/signin"><p>Have an account? Please login!</p></NavLink>
                    </button>
                </Form>
            </div>
        </div>
                </Col>
                
                <Col  sm={12} md={6}>
                <img className="img-fluid" src={byCycle} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;