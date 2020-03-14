import React from 'react';

import ProductArea from './components/ProductsArea';

import { GlobalStyles, Container } from './utils/GlobalStyles';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Container>
      <ProductArea />
    </Container>
  </div>
);

export default App;
