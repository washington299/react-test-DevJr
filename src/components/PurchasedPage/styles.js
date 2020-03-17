import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eceff1;

  .message-box {
    background-color: #fff;
    width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 30px;

    .message-box-person {
      color: #546e7a;
      text-align: center;
    }
    .message-box-message {
      text-align: center;
      color: #546e7a;
      font-size: 18px;
      font-weight: 600;

      span {
        display: inline-block;
        margin: 0 5px;
        color: #019cdf;
      }
    }

    img {
      width: 180px;
      margin: 30px 0;
      margin-left: 30px;
    }
    button {
      width: 230px;
      border: none;
      border-radius: 5px;
      color: #fff;
      background-color: #ff9800;
      margin-top: 15px;
      padding: 10px 20px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
