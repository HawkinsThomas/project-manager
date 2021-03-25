import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';


const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
  ),
);

export default store;
