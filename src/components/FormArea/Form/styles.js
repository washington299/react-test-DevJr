import styled from 'styled-components';

export const FormStyles = styled.form`
  display: flex;
  padding-bottom: 40px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  flex: ${props => props.size};

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
