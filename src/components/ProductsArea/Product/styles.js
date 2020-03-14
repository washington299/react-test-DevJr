import styled from 'styled-components';

export default styled.div`
  width: 25%;

  .product-item {
    margin: 20px 10px;
    padding: 10px;
    cursor: pointer;

    :hover {
      border: 1px solid #eee;
      border-radius: 8px;
      box-shadow: 0px 3px 5px #ccc;
    }
  }

  .product-item--background {
    .product-item--img {
      width: 100%;
    }
    .product-item--name,
    .product-item--price {
      color: #546e7a;
    }
    .product-item--price {
      font-size: 22px;
      font-weight: bold;
    }
    .product-item--different-prices {
      color: #b0bdc4;
      font-size: 14px;
      margin-top: 10px;

      p {
        margin: 5px 0;
      }
    }
  }
`;
