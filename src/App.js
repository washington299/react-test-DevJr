import React from 'react';

import ProductsArea from './components/ProductsArea';

import { GlobalStyles, Container } from './utils/GlobalStyles';
import FormArea from './components/FormArea';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Container>
      <ProductsArea />
      <FormArea />
    </Container>
  </div>
);

export default App;
