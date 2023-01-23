import { call, takeEvery, put } from "redux-saga/effects";
import { getAllMembers } from "../api/membersApi";
import { getMembers } from "../reducer/membersReducer";
import { GET_MEMBERS } from "../actions/membersActions";

export function* getMembersSaga() {
  try {
    let res = yield call(getAllMembers);
    yield put(getMembers(res));
  } catch (err) {
    console.log(err);
  }
}

export function* getMembersSagaTake() {
  yield takeEvery(GET_MEMBERS, getMembersSaga);
}
