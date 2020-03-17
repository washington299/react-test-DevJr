import React from 'react';

import Routes from './services/routes';

import { GlobalStyles, Container } from './utils/GlobalStyles';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Container>
      <Routes />
    </Container>
  </div>
);

export default App;
