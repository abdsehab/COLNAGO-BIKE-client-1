import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from './../../../Assets/slider/slider1.jpg';
import slider2 from './../../../Assets/slider/slider2.jpg';
import slider3 from './../../../Assets/slider/slider3.jpg';


const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;