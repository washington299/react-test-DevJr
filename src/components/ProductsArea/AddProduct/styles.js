import styled from 'styled-components';

export default styled.div`
  .add-product {
    display: flex;
    justify-content: center;
    margin: 15px 0;

    .add-product__svg {
      font-size: 45px;
    }
    .add-product__input {
      width: 125px;
      margin: 0 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      text-align: center;
      font-size: 16px;
      outline: none;
    }
  }

  .add-product__button {
    width: 100%;
    background-color: #019cdf;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 0;
    font-weight: 600;
  }
`;
