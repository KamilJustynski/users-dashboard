// userSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../slices/UserReducer";

function* fetchUsersSaga() {
  try {
    const response: Response = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/users")
    );
    const data = yield response.json();
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure("Nie udało się załadować danych użytkownika"));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}
