import countryApi from "api/ApiReal/country";
import { countryActions } from "./countrySlice";

const { takeLatest, call, put, debounce } = require("redux-saga/effects");

function* fetchCountryApi() {
  const res = yield call(countryApi.getAll);
  localStorage.setItem("country", JSON.stringify(res));
  yield put(countryActions.fetchApiCountryTourSuccess(res));
}
function* fetchApiCountryFilter(searchText) {
  const res = yield call(countryApi.getAll);
  const list = res.filter((list) =>
    list.CountryName.includes(searchText.payload)
  );
  yield put(countryActions.fetchApiCountryFilterSuccess(list));
}

function* countrySaga() {
  yield takeLatest(countryActions.fetchApiCountry.type, fetchCountryApi);
  yield debounce(
    700,
    countryActions.fetchApiCountryFilter.type,
    fetchApiCountryFilter
  );
}

export default countrySaga;
