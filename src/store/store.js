import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import { getMembersSaga } from "./sagas/memberSaga";
import membersReducer from "./reducer/membersReducer";
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: { membersReducer },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(getMembersSaga);
