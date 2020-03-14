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

export const Title = styled.h1`
  color: #546e7a;
`;
