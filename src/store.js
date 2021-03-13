import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import reducers from './reducers';


const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleWare),
  ),
);

export default store;
