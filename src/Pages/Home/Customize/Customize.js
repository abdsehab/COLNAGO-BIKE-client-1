import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import leftImg from './../../../Assets/my-sixty4.svg';
import rightImg from './../../../Assets/colnago_body.gif';

const Customize = () => {
    return (
        <div>
            {/* <div style={{ background: `url(${SectionBg})`, backgroundAttachment: "fixed" }}>
                <h1 className="text-white text-center p-5">About Us</h1>
            </div> */}
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img className="mx-auto mt-5 mb-3 img-fluid" src={leftImg} alt="" />
                        <h2>From the creators of the first carbon bike, the safest frame in the world.</h2><br />
                            <p>Carbon is not all the same. With what we use to build our frames, the resistance limits are 5 times higher than required by the regulations.</p>                         
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <div>
                                <img className="mx-auto mt-3 img-fluid" src={rightImg} alt="" />
                            
                        </div>
                    </Col>
                </Row >
            </Container >
        </div>
    );
};

export default Customize;