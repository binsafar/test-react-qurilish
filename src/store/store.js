import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import membersReducer from "./reducer/membersReducer";

import { watchFilterMembersSaga, watchGetMemberSaga } from "./sagas/memberSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: { membersReducer },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watchGetMemberSaga);
sagaMiddleware.run(watchFilterMembersSaga);
