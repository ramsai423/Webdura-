import { createStore, applyMiddleware } from 'redux';
import { detailsSaga } from "../saga/index"
import createSagaMiddleware from "redux-saga"
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware));
sagaMiddleware.run(detailsSaga)
export default store
