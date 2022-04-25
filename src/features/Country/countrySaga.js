import countryApi from "api/ApiReal/country";
import fakeCityApi from "api/fakeCityApi";
import fakeCountryApi from "api/fakeCountryApi";
import { countryActions } from "./countrySlice";

const { takeLatest, call, put } = require("redux-saga/effects");
function* fetchCountryApi() {
  const res = yield call(countryApi.getAll);
  localStorage.setItem("country", JSON.stringify(res));
  yield put(countryActions.fetchApiCountryTourSuccess(res));
}

function* countrySaga() {
  yield takeLatest(countryActions.fetchApiCountry.type, fetchCountryApi);
}

export default countrySaga;
