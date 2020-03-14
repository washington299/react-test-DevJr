import React from 'react';
import { connect } from 'react-redux';

import ProductStyles from './styles';

const Product = ({ products }) => (
  <>
    {products.map(({ id, image, name, price, installmentPrice, cashPrice }) => (
      <ProductStyles key={id}>
        <div className="product-item">
          <div className="product-item--background">
            <img src={image} alt={name} />
            <p className="product-item--name">{name}</p>
            <span className="product-item--price">{price}</span>
            <p>{installmentPrice}</p>
            <p>{cashPrice}</p>
          </div>
        </div>
      </ProductStyles>
    ))}
  </>
);

const mapStateToProps = state => {
  const { products } = state.products;
  return { products };
};

export default connect(mapStateToProps)(Product);
