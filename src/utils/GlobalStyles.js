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
  margin-top: ${props => props.pt || 20}px;
  padding-bottom: ${props => props.pb || 0}px;
`;

export const Title = styled.h1`
  color: #546e7a;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
`;

export const ProductStyle = styled.div`
  background: #aaa;
`;
