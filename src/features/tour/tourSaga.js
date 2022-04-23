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
  yield put(tourActions.setTourMalaysiaList(response));
}
function* fetchTourSingaporeList() {
  const response = yield call(fakeTourApiSingapore.getAll);
  yield put(tourActions.setTourSingaporeList(response));
}

//api real
function* fetchApiListCountry() {
  const response = yield call(countryApi.getAll);
  yield put(tourActions.setCountryList(response));
}

function* fetchApiListCityVietNam() {
  const response = yield call(fakeCityApi.getAll);
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
  }
}

function* tourSaga() {
  yield takeLatest(tourActions.fetchApiTour.type, fetchDataTourList);
}

export default tourSaga;
