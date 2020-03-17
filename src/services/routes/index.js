import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PurchasedPage from '../../components/PurchasedPage';
import ProductsPage from '../../components/ProductsPage';

import { Container } from '../../utils/GlobalStyles';

const Routers = () => (
  <Switch>
    <Route path="/purchased" component={PurchasedPage} />
    <Container>
      <Route path="/" component={ProductsPage} />
    </Container>
  </Switch>
);

export default Routers;
