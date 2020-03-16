import styled from 'styled-components';

export const FormStyles = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;

  .form__area--name,
  .form__area--email {
    width: 40%;
  }
  .form__area--select {
    width: 20%;
  }

  @media only screen and (max-width: 960px) {
    .form__area--name,
    .form__area--email {
      width: 50%;
    }
    .form__area--select {
      width: 200px;
    }
  }
  @media only screen and (max-width: 530px) {
    .form__area--name,
    .form__area--email,
    .form__area--select {
      width: 100%;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 10px;

  label {
    margin-bottom: 5px;
    color: #546e7a;
    font-weight: 600;
  }

  input,
  select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 15px;

    ::placeholder {
      color: #bbb;
    }
  }

  input {
    height: 30px;
  }
  select {
    height: 100%;
    cursor: pointer;
  }

  @media only screen and (max-width: 960px) {
    margin: 10px;
  }
`;

export const PurchaseArea = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  margin-right: 10px;
  padding-bottom: 40px;

  h2 {
    margin-bottom: 5px;
    color: #546e7a;
  }
  button {
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #ff9800;
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;
  }
`;
