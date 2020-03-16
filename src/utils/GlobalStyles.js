import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

export const Container = styled.section`
  max-width: 1140px;
  margin: auto;
`;

// pt = padding-top, pb = padding-bottom
export const Header = styled.header`
  padding-top: ${props => props.pt}px;

  @media only screen and (max-width: 1140px) {
    margin: 0 10px;
  }
  @media only screen and (max-width: 800px) {
    padding-top: 30px;
  }
  @media only screen and (max-width: 530px) {
    padding-top: 0;
  }
`;

export const Title = styled.h1`
  color: #546e7a;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
`;

export const ProductStyle = styled.div`
  background: #aaa;
`;

export const Error = styled.span`
  display: block;
  color: #f00;
  font-size: 13px;
  font-weight: 600;
  margin: 5px;
`;
