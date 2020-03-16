import React, { useState } from 'react';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';

import { Error } from '../../../utils/GlobalStyles';
import Styles from './styles';

const AddProduct = ({ quantity }) => {
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [addError, setAddError] = useState(false);

  function decrementQuantity() {
    if (productQuantity === 0) return;
    setProductQuantity(productQuantity - 1);
  }

  function incrementQuantity() {
    if (productQuantity === 99) return;
    setProductQuantity(productQuantity + 1);
  }

  function handleAddButton() {
    if (productQuantity > 0 ? setAddError(false) : setAddError(true));
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
      <button
        type="button"
        className="add-product__button"
        onClick={handleAddButton}
      >
        ADICIONAR
      </button>
      {addError && (
        <Error style={{ textAlign: 'center' }}>
          Nenhum produto selecionado
        </Error>
      )}
    </Styles>
  );
};

export default AddProduct;
