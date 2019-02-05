import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import App from './comps/App';
import reducers from './reducers';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore = createStore(reducers, /* preloadedState, */ composeWithDevTools(applyMiddleware(thunk)));


window.version = '1.0.0';
console.log(`version = ${window.version}`);

console.log('process.env.ENV', process.env.NODE_ENV);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>
  , document.getElementById('app'));
