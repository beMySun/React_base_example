
import React from 'react';
import { render } from 'react-dom';

/* redux realtives start */
// import { bindActionCreators, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';
/* redux realtives end */

/* store realtives start */
// import * as actionCreators from './common/redux/actions';
import rootReducer from './common/redux/reducers';
import { configureStore } from './common/redux/store';
import App from './App';

const ROOTNODE = document.getElementById('root');
render(
  <Provider store = { configureStore(rootReducer) } >
    <App />
  </Provider>,
  ROOTNODE
);
