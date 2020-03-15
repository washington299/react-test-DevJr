import React, { useState } from 'react';
import { connect } from 'react-redux';

import AddProduct from '../AddProduct';
import formatCurrency from '../../../utils/formatCurrency';

import ProductStyles from './styles';

const Product = ({ products }) => {
  const [showAddArea, setShowAddArea] = useState(null);

  return (
    <>
      {products.map(
        ({ id, image, name, price, installmentPrice, cashPrice, quantity }) => (
          <ProductStyles key={id} onClick={() => setShowAddArea(id)}>
            <div className="product-item">
              <div className="product-item__background">
                <img src={image} alt={name} className="product-item--img" />
                <p className="product-item--name">{name}</p>
                <span className="product-item--price">
                  {formatCurrency(price)}
                </span>
                <div className="product-item--different-prices">
                  <p>{`Em até 12x de ${formatCurrency(installmentPrice)}`}</p>
                  <p>
                    {`${formatCurrency(cashPrice)} à vista (10% de desconto)`}
                  </p>
                </div>
                {id === showAddArea && <AddProduct quantity={quantity} />}
              </div>
            </div>
          </ProductStyles>
        ),
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { products } = state.products;
  return { products };
};

export default connect(mapStateToProps)(Product);
