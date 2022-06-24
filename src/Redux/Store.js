import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import Reducer from './Reducer';
import { rootSaga } from './Sagas';
const sagaMiddleware = createSagaMiddleware();
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(Reducer, composeEnhancers(

    applyMiddleware(sagaMiddleware)
  ));
  sagaMiddleware.run(rootSaga)

  export default store
