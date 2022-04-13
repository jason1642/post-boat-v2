import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.ts';

// =====================================
  // Wrap provider in index.js, like react-router
  // Middlewares allow you to create asynchronous calls within the action action
  // ^ action returns a function which you can do api requests in , then finally return dispatch({object}) like normal
// =====================================

// createStore(reducers, defaultState)
export const store = createStore(reducers,
  {},
applyMiddleware(thunk));
