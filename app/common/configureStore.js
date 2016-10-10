import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import { autoRehydrate } from 'redux-persist';

export default function configureStore() {
  let store;

  if(process.browser) {
    const enhancers = compose(
      autoRehydrate(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    store = createStore(
      rootReducer,
      undefined, // due to redux-persist
      enhancers
    );
  } else {
    store = createStore(rootReducer);
  }

  if(module.hot) {
    module.accept('./reducers/index', () => {
      const nextReducer = require('./reducers/index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
