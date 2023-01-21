import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = createStore({});
// sagaMiddleware.run(rootSaga);

export default store;
