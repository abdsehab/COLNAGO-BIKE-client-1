import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


const Product = ({product}) => {
    const { name, _id, description, img, price } = product;

  // console.log(product);
    return (
        <div>
            <div className="product pb-3">
              <div className="text-center" style={{ color: "#1C1C1C" }}>
                <img src={img} alt="" />
                <h4 className="mt-3 fw-bolder" style={{color:"#D8BE04"}}>{name}</h4>
                <h2 className="fw-bolder text-white">$ {price}</h2>
                <p className="p-1 text-white">{description}</p>
              </div>
              <div className="text-center mt-3">
                <div className="text-center mt-3">
                  <Link to={`/products/${_id}`}><button className="btn-style">Order Now</button></Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Product;