import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import localForage from 'localforage';
import createActionBuffer from 'redux-action-buffer';
import { REHYDRATE } from 'redux-persist/constants';
import reducer from '../common/reducers';
import thunk from 'redux-thunk';

import createSocketMiddleware from './socketMiddleware';

import io from 'socket.io-client';
const socket = io('');

const socketMiddleware = createSocketMiddleware(socket);

import routes from '../common/routes';
import StyleProvider from '../common/StyleProvider';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

let cachingAvailable = true;
try {
  window.localStorage;
} catch(e) {
  cachingAvailable = false;
  console.warn('Caching disabled. ', e); // eslint-disable-line
}

const middleware = [thunk, socketMiddleware];

if(cachingAvailable) middleware.push(createActionBuffer(REHYDRATE));

let enhancers;

if(process.env.NODE_ENV === 'production') {
  enhancers = compose(autoRehydrate(), applyMiddleware(...middleware));
} else {
  enhancers = composeEnhancers(autoRehydrate(), applyMiddleware(...middleware));

  if(module.hot) {
    module.hot.accept('../common/reducers/index', () => {
      const nextReducer = require('../common/reducers/index');
      store.replaceReducer(nextReducer);
    });
  }
}

const store = createStore(reducer, enhancers);

function renderDom() {
  render(
    <StyleProvider userAgent={navigator.userAgent}>
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
      </Provider>
    </StyleProvider>,
  document.getElementById('app'));
}

if(cachingAvailable) {
  persistStore(store, { storage: localForage }, renderDom);
} else {
  renderDom();
}
