import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts.js";
import Customize from "./Customize/Customize.js";
import Product from "./Product/Product.js";
import Slider from "./Slider/Slider.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiking } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const products = useProducts();
  return (
    <div>
      <Slider></Slider>
      <Customize></Customize>
      <div>
        <Container>
          <h1 className="text-center mt-5 text-danger">
            <FontAwesomeIcon icon={faBiking} /> COLNAGO{" "}
            <FontAwesomeIcon icon={faBiking} />
          </h1>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            A name which all cyclists will be familiar with. Ernesto Colnago’s
            legacy started way before 1954 when his brand was established, and
            till this day, his passion for cycling represents some of the best
            athletes in the sport.
          </p>
          <div className="products-container">
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
          <div className="container">
            <div className="text-center">Reviews</div>
            <p className="text-center">What our customer says</p>
            <div className="row">
              {reviews?.map((review) => {
                return (
                  <div
                    key={review._id}
                    className="card"
                    style={{ width: "18rem" }}
                  >
                    <div class="card-body">
                      <h5 class="card-title">{review.name}</h5>

                      <p class="card-text">{review.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
