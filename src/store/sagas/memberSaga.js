import { call, takeEvery, put } from "redux-saga/effects";
import { getAllMembers } from "../api/membersApi";
import { getFiltered, getMembers } from "../reducer/membersReducer";

import { FILTER_MEMBER, GET_MEMBERS } from "../actions/membersActions";

export function* getMembersSaga({ payload }) {
  let res = yield call(getAllMembers, payload);
  yield put(getMembers(res));
  yield put(getFiltered(res));
}

export function* watchGetMemberSaga() {
  yield takeEvery(GET_MEMBERS, getMembersSaga);
}

export function* filterMembersSaga({ payload }) {
  yield put(getFiltered(payload));
}

export function* watchFilterMembersSaga() {
  yield takeEvery(FILTER_MEMBER, filterMembersSaga);
}
