import favauriteApi from "api/ApiReal/favauriteApi";
import { favauriteActions } from "./favauriteSlice";

const { takeLatest, call, put } = require("redux-saga/effects");
function* fetchFavauriteApi() {
  const res = yield call(favauriteApi.getAll);
  localStorage.setItem("favaurite", JSON.stringify(res));
  yield put(favauriteActions.fetchApiFavauriteTourSuccess(res));
}

function* favauriteSaga() {
  yield takeLatest(favauriteActions.fetchApiFavaurite.type, fetchFavauriteApi);
}

export default favauriteSaga;
