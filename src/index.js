import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './redux/modules';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import getRoutes from './config/routes';
import restricted from './helpers/restricted';

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

// HOC to check if user is authenticated and route accordingly
function checkAuth(component) {
  return restricted(component, store);
}

ReactDOM.render(
  <Provider store={store}>{getRoutes(checkAuth)}</Provider>,
  document.getElementById('root')
);
registerServiceWorker();
