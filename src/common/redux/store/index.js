import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const middleware = [thunkMiddleware];

let composeEnhancers;

if (process.env.NODE_ENV === 'production') {
  composeEnhancers = compose;
} else {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


export const configureStore = rootReducer => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
