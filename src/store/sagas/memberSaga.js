import { call, takeEvery, put } from "redux-saga/effects";
import { deleteMember, getAllMembers, updateMember } from "../api/membersApi";
import { getMembers } from "../reducer/membersReducer";
import { createMember } from "../api/membersApi";

import {
  ADD_MEMBER,
  DELETE_MEMBER,
  GET_MEMBERS,
  UPDATE_MEMBER,
} from "../actions/membersActions";

// getAll
export function* getMembersSaga() {
  let res = yield call(getAllMembers);
  yield put(getMembers(res));
}

export function* watchGetMemberSaga() {
  yield takeEvery(GET_MEMBERS, getMembersSaga);
}

// delete
export function* deleteMemberSaga({ payload }) {
  console.log(payload);
  yield call(deleteMember(payload));
  yield put({ type: DELETE_MEMBER, payload });
}

export function* watchDeleteMemberSaga() {
  yield takeEvery(DELETE_MEMBER, deleteMemberSaga);
}

//add member
export function* addMemberSaga({ payload }) {
  console.log(payload);
  yield call(createMember(payload));
  yield put({ type: ADD_MEMBER, payload });

  let res = yield call(getAllMembers);
  yield put(getMembers(res));
}

export function* watchAddMemberSaga() {
  yield takeEvery(ADD_MEMBER, addMemberSaga);
}

//update
export function* updateMemberSaga({ payload }) {
  console.log(payload);
  yield call(updateMember(payload));
  yield put({ type: UPDATE_MEMBER, payload });

  let res = yield call(getAllMembers);
  yield put(getMembers(res));
}

export function* watchUpdateMemberSaga() {
  yield takeEvery(UPDATE_MEMBER, updateMemberSaga);
}
