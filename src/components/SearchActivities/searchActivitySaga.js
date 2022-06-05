import tourApi from "api/ApiReal/tourApi";
import { countryActions } from "features/Country/countrySlice";
import { put, all, call, takeLatest } from "redux-saga/effects";
import { searchActivityActions } from "./searchActivitySlice";

function* fetchTourApi(searchText) {
  const response = yield call(tourApi.getAll);

  yield put(searchActivityActions.fetchSearchActivitySuccess(response));
}

// function* fetchCountryApi() {
//   if (id.payload == undefined) return;
//   const res = yield call(countryApi.getAll);
//   localStorage.setItem("country", JSON.stringify(res));
//   let nameCountry = res.filter((list) => {
//     return list.IdCountry.trim() == String(id.payload).trim();
//   });

//   yield put(countryActions.fetchApiCountryTourSuccess(res));
//   yield put(countryActions.fetchApiCountryTourName(nameCountry[0].CountryName));
// }

function* searchActivitySaga() {
  yield takeLatest(
    searchActivityActions.fetchSearchActivity.type,
    fetchTourApi
  );
  // yield takeLatest(
  //   countryActions.fetchApiCountry.type,
  //   fetchCountryApi
  // );
}
export default searchActivitySaga;
