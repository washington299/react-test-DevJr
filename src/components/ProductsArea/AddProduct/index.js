import React, { useState } from 'react';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';

import Styles from './styles';

const AddProduct = ({ quantity }) => {
  const [productQuantity, setProductQuantity] = useState(quantity);

  function decrementQuantity() {
    if (productQuantity === 0) return;
    setProductQuantity(productQuantity - 1);
  }

  function incrementQuantity() {
    if (productQuantity === 99) return;
    setProductQuantity(productQuantity + 1);
  }

  return (
    <Styles>
      <div className="add-product">
        <IoMdRemoveCircle
          className="add-product__svg"
          color={productQuantity > 0 ? '#546e7a' : '#b0bec5'}
          onClick={decrementQuantity}
        />
        <input
          readOnly
          value={productQuantity}
          className="add-product__input"
        />
        <IoMdAddCircle
          className="add-product__svg"
          color={productQuantity < 99 ? '#546e7a' : '#b0bec5'}
          onClick={incrementQuantity}
        />
      </div>
      <button type="button" className="add-product__button">
        ADICIONAR
      </button>
    </Styles>
  );
};

export default AddProduct;
