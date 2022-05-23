import tourApi from "api/ApiReal/tourApi";
import { put, all, call, takeLatest } from "redux-saga/effects";
import { searchActivityActions } from "./searchActivitySlice";

function* fetchTourApi(searchText) {
  const response = yield call(tourApi.getAll);

  yield put(searchActivityActions.fetchSearchActivitySuccess(response));
}

function* searchActivitySaga() {
  yield takeLatest(
    searchActivityActions.fetchSearchActivity.type,
    fetchTourApi
  );
}
export default searchActivitySaga;
