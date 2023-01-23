import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { getMembers } from "../reducer/membersReducer";

let callApi = async ({ data }) => {
  return await axios.create({
    baseURL: "https://localhost:8080",
    data,
  });
};

export function* getMembersSaga() {
  try {
    let res = call()
  } catch (err) {
    console.log(err);
  }
}
