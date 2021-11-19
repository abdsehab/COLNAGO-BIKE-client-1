import React from 'react';
import './Products.css';
import { Container } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts.js';
import Product from './../Product/Product.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking} from '@fortawesome/free-solid-svg-icons';

const Products = () => {
    const products = useProducts();
  if (products.length === 0) {
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>;
  }
    return (
        <div>
            <Container>
                  <h1 className="text-center mt-5 text-danger"><FontAwesomeIcon icon={faBiking} /> COLNAGO <FontAwesomeIcon icon={faBiking} /></h1>
                          <p className="my-4 mt-2 text-center text-muted fs-5">
            A name which all cyclists will be familiar with. Ernesto Colnago’s legacy started way before 1954 when his brand was established, and till this day, his passion for cycling represents some of the best athletes in the sport.
          </p>
                <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </Container>
        </div>
    );
};

export default Products;