import React from 'react';

import ProductsArea from './components/ProductsArea';

import { GlobalStyles, Container } from './utils/GlobalStyles';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Container>
      <ProductsArea />
    </Container>
  </div>
);

export default App;
