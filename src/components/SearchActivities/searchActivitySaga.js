import tourApi from "api/ApiReal/tourApi";
import { put, all, call, takeLatest } from "redux-saga/effects";
import { searchActivityActions } from "./searchActivitySlice";

function* fetchTourApi(searchText) {
  const a = [];
  const response = yield call(tourApi.getAll);

  console.log("res", response);
  yield put(searchActivityActions.fetchSearchActivitySuccess(response));
}

function* searchActivitySaga() {
  yield takeLatest(
    searchActivityActions.fetchSearchActivity.type,
    fetchTourApi
  );
}
export default searchActivitySaga;
