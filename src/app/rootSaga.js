import searchSaga from "features/search/searchSaga";
import tourSaga from "features/tour/tourSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  console.log("rootSaga - ok");
  yield all([tourSaga(), searchSaga()]);
}
