import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faBiking, faCopyright, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import footerLogo from './../../../Assets/footerLogo.png';
import FB from './../../../Assets/fbicon.png';
import Linkedin from './../../../Assets/linkedinicon.png';
import Twitter from './../../../Assets/twittericon.png';
import Insta from './../../../Assets/instaicon.png';

const Footer = () => {
    return (
        <div style={{ backgroundColor:"#231F20"}}>
        <div>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="text-center">
                            <img className="mt-3 mb-4" width="50%" src={footerLogo} alt="" />
                        </div>

                    </Col>
                    <Col md={3}>
                        <div>
                            <ul className="list-unstyled mt-3 footer-link text-center">
                                <li style={{ color: "#E33156" }} className="list-unstyled mb-4 mt-3 fw-bolder"><h3>Quick Links</h3></li>
                                <li><NavLink to="/home"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Home</span></NavLink></li>
                                <li><NavLink to="/about"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">About us</span></NavLink></li>
                                <li><NavLink to="/products"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Products</span></NavLink></li>
                                <li><NavLink to="/contact"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Contact us</span></NavLink></li>

                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="text-center">
                            <li style={{ color: "#E33156" }} className="list-unstyled mb-4 mt-3 fw-bolder"><h3>Contact Address</h3></li>
                            
                            <ul className="list-unstyled text-white mt-3 m">
                                <li className="m-3"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="ms-2">Tongi, Gazipur, Dhaka</span></li>
                                <li className="m-3 "><FontAwesomeIcon icon={faEnvelope} /> <span className="ms-2">zubairhmd84@gmail.com</span></li>
                                <li className="m-3 "><FontAwesomeIcon icon={faPhone} /> <span className="ms-2">01619141476</span></li>
                            </ul>

                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <ul className="list-unstyled mt-3 footer-link text-center">
                                    <li style={{ color: "#E33156" }} className="list-unstyled mt-3 mb-5 fw-bolder text-center"><h3>Follow Us</h3></li>
                                    
                                <a href="https://www.facebook.com/mdzubairahmed/" target="_blank" rel="noopener noreferrer"><img className="me-2 mb-3" width="50px" src={FB} alt="" /></a>

                                <a href="https://www.linkedin.com/in/devzubair/" target="_blank" rel="noopener noreferrer"><img className="me-2 mb-3" width="50px" src={Linkedin} alt="" /></a>

                                <a href="https://twitter.com/technicalzuba" target="_blank" rel="noopener noreferrer"><img className="me-2 mb-3" width="50px" src={Twitter} alt="" /></a>

                                <a href="https://www.instagram.com/zubairhmd84/" target="_blank" rel="noopener noreferrer"><img className="me-2 mb-3" width="50px" src={Insta} alt="" /></a>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">
                <p><FontAwesomeIcon icon={faCopyright} /> 2021 | All Right Reserved | <FontAwesomeIcon icon={faBiking} /> COLNAGO  | Designed and Developed by Dev Zubair</p>
            </div>
            </div>
            </div>
    );
};

export default Footer;