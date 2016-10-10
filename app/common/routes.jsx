import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute />
  </Route>
);

export default routes;
