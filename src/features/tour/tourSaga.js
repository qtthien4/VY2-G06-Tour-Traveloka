import countryApi from "api/ApiReal/country";
import fakeCityApi from "api/fakeCityApi";
import fakeCountryApi from "api/fakeCountryApi";
import fakeTourApiMalaysia from "api/fakeTourApiMalaysia";
import fakeTourApiSingapore from "api/fakeTourApiSingapore";
import fakeTourApiThailand from "api/fakeTourApiThailand";
import { takeLatest, call, all, put, takeEvery } from "redux-saga/effects";
import { tourActions } from "./tourSlice";

function* fetchTourThaiLandList() {
  const response = yield call(fakeTourApiThailand.getAll);
  console.log("ThaiLand:", response);
  yield put(tourActions.setTourThaiLanList(response));
}
function* fetchTourMalaysiaList() {
  const response = yield call(fakeTourApiMalaysia.getAll);
  console.log("Malaysia:", response);
  yield put(tourActions.setTourMalaysiaList(response));
}
function* fetchTourSingaporeList() {
  const response = yield call(fakeTourApiSingapore.getAll);
  console.log("Singapore:", response);
  yield put(tourActions.setTourSingaporeList(response));
}

// function* fetchApiListCountry() {
//   const response = yield call(fakeCountryApi.getAll);
//   console.log("Country:", response);
//   yield put(tourActions.setCountryList(response));
// }

//api real
function* fetchApiListCountry() {
  const response = yield call(countryApi.getAll);
  console.log("Country:", response);
  yield put(tourActions.setCountryList(response));
}

function* fetchApiListCityVietNam() {
  const response = yield call(fakeCityApi.getAll);
  console.log("CityVietNam:", response);
  yield put(tourActions.setCityList(response));
}

function* fetchDataTourList() {
  try {
    yield all([
      call(fetchApiListCityVietNam),
      call(fetchApiListCountry),
      call(fetchTourSingaporeList),
      call(fetchTourMalaysiaList),
      call(fetchTourThaiLandList),
    ]);
    yield put(tourActions.fetchDataSucceess());
  } catch (error) {
    yield put(tourActions.fetchApiTourFailed());
    console.log("fail to fetch tour city Data", error);
  }
}

function* tourSaga() {
  yield takeLatest(tourActions.fetchApiTour.type, fetchDataTourList);
  //yield call(fetchDataTourList)
  console.log("tourSaga123");
}

export default tourSaga;
