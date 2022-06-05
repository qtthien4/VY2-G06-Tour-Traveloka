import countryApi from "api/ApiReal/country";
import { countryActions } from "./countrySlice";

const { takeLatest, call, put, debounce } = require("redux-saga/effects");

function* fetchCountryApi(id) {
  if (id.payload == undefined) return;
  const res = yield call(countryApi.getAll);
  localStorage.setItem("country", JSON.stringify(res));
  let nameCountry = res.filter((list) => {
    return list.IdCountry.trim() == String(id.payload).trim();
  });

  yield put(countryActions.fetchApiCountryTourSuccess(res));
  yield put(countryActions.fetchApiCountryTourName(nameCountry[0].CountryName));
}
function* fetchCountryApiSearch(id) {
  const res = yield call(countryApi.getAll);
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
  yield takeLatest(countryActions.fetchApiCountrySearch.type, fetchCountryApiSearch);
}

export default countrySaga;
