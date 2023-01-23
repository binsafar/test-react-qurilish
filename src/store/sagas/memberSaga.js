import { call, takeEvery, put } from "redux-saga/effects";
import { getAllMembers } from "../api/membersApi";
import { getMembers } from "../reducer/membersReducer";

import { GET_MEMBERS } from "../actions/membersActions";

export function* getMembersSaga({ payload }) {
  let res = yield call(getAllMembers, payload);
  yield put(getMembers(res));
}

export function* watchGetMemberSaga() {
  yield takeEvery(GET_MEMBERS, getMembersSaga);
}
