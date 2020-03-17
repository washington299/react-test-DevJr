import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PurchasedPage from '../../components/PurchasedPage';
import ProductsPage from '../../components/ProductsPage';

const Routers = () => (
  <Switch>
    <Route path="/purchased" component={PurchasedPage} />
    <Route path="/" component={ProductsPage} />
  </Switch>
);

export default Routers;
