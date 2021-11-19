import React from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth.js";
import bikeImg from "./../../Assets/contact.png";

const Login = () => {
  const { allContexts } = useAuth();

  const { signInWithEmail, error, getPassword, getEmail } = allContexts;

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <div className="text-center my-4">
            <h2>Please Login</h2>
            <h5 className=" mt-2">Login with Email & Password</h5>
            <p className="text-danger text-center">{error}</p>
            <div className="form-container mx-auto">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  signInWithEmail(history, redirect_uri);
                }}
              >
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="email" visuallyHidden>
                      Your Email Address
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getEmail}
                        type="email"
                        autoComplete="current-email"
                        id="email"
                        placeholder="Enter your email address"
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
                      <FormControl
                        required
                        onBlur={getPassword}
                        type="password"
                        autoComplete="current-password"
                        id="password"
                        placeholder="Enter your password"
                      />
                    </InputGroup>
                  </Col>
                </Row>

                <button
                  onClick={signInWithEmail}
                  type="submit"
                  className="mt-2 w-100 btn-style"
                >
                  Login
                </button>
                <button type="submit" className="mt-2 w-100 signup-btn">
                  <NavLink className="text-decoration-none" to="/signup">
                    <p>Need an Account? Please Sign up!</p>
                  </NavLink>
                </button>
              </Form>
            </div>
          </div>
        </Col>

        <Col sm={12} md={6}>
          <img className="img-fluid" src={bikeImg} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
