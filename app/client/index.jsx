import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import localForage from 'localforage';

import routes from '../common/routes';

import StyleProvider from '../common/StyleProvider';

import configureStore from '../common/configureStore';

const store = configureStore();
persistStore(store, { storage: localForage });

render(
  <StyleProvider userAgent={navigator.userAgent}>
    <Provider store={store}>
      <Router routes={routes} history={browserHistory} />
    </Provider>
  </StyleProvider>,
document.getElementById('app'));
