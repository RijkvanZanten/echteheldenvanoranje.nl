import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Person from './containers/Person';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="persoon/:id" component={Person}/>
  </Route>
);

export default routes;
