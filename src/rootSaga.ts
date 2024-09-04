import { all, fork } from "redux-saga/effects";
import { watchFetchUsers } from "./api/fetchApi";

export default function* rootSaga() {
  yield all([fork(watchFetchUsers)]);
}
