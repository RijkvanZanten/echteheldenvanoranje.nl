import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Person from './containers/Person';
import Event from './containers/Event';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="persoon/:id" component={Person}/>
    <Route path="event/:id" component={Event}/>
  </Route>
);

export default routes;
