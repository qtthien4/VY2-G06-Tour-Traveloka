import countryApi from "api/ApiReal/country";
import tourApi from "api/ApiReal/tourApi";
import fakeTypeApi from "api/apiType/fakeTypeApi";
import fakeCityApi from "api/fakeCityApi";
import fakeTourApiMalaysia from "api/fakeTourApiMalaysia";
import fakeTourApiSingapore from "api/fakeTourApiSingapore";
import fakeTourApiThailand from "api/fakeTourApiThailand";
import { all, call, put, takeLatest } from "redux-saga/effects";
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

function* fetchApiListTypeDaytour(nameType) {
  const listCityVN = yield call(fakeCityApi.getAll);
  const listCountry = yield call(countryApi.getAll);
  const listType = yield call(fakeTypeApi.getAll);
  const listMalaysia = yield call(fakeTourApiMalaysia.getAll);
  const listSingapore = yield call(fakeTourApiSingapore.getAll);
  const listThailand = yield call(fakeTourApiThailand.getAll);
  const listArrType = listType.filter((list) => list.link === nameType)[0];
  listArrType.listCountryType.listCountry = listCountry;
  listArrType.listCityType.listCity = listCityVN;
  listArrType.listMalaysiaType.listMalaysia = listMalaysia;
  listArrType.listSingaporeType.listSingapore = listSingapore;
  listArrType.listThailandType.listThailand = listThailand;

  yield put(tourActions.setListType(listArrType));
}

function* fetchApiListTypeTransport(nameType) {
  const listCityVN = yield call(fakeCityApi.getAll);
  const listTour = yield call(tourApi.getAll);
  const listSaigon = listTour.filter(
    (list) => list.IdCity.trim() === "10009794" && list.idtype.trim() === "2"
  );
  const listNhaTrang = listTour.filter(
    (list) => list.IdCity.trim() === "10009841" && list.idtype.trim() === "2"
  );
  const listHaNoi = listTour.filter(
    (list) => list.IdCity.trim() === "10009843" && list.idtype.trim() === "2"
  );

  const listCountry = yield call(countryApi.getAll);
  const listType = yield call(fakeTypeApi.getAll);
  const listArrType = listType.filter((list) => list.link === nameType)[0];
  listArrType.listCountryType.listCountry = listCountry;
  listArrType.listCityType.listCity = listCityVN;
  listArrType.listSaigonType.listSaigon = listSaigon;

  listArrType.listNhaTrangType.listNhaTrang = listNhaTrang;
  listArrType.listHaNoiType.listHaNoi = listHaNoi;

  yield put(tourActions.setListType(listArrType));
}

function* fetchApiListTypeSport(nameType) {
  const listCityVN = yield call(fakeCityApi.getAll);
  const listCountry = yield call(countryApi.getAll);
  const listType = yield call(fakeTypeApi.getAll);
  const listArrType = listType.filter((list) => list.link === nameType)[0];
  listArrType.listCountryType.listCountry = listCountry;
  listArrType.listCityType.listCity = listCityVN;

  yield put(tourActions.setListType(listArrType));
}

function* fetchApiListTypePlayground(nameType) {
  const listCityVN = yield call(fakeCityApi.getAll);
  const listCountry = yield call(countryApi.getAll);
  const listType = yield call(fakeTypeApi.getAll);
  const listArrType = listType.filter((list) => list.link === nameType)[0];
  listArrType.listCountryType.listCountry = listCountry;
  listArrType.listCityType.listCity = listCityVN;

  yield put(tourActions.setListType(listArrType));
}

function* fetchApiListTypeAttraction(nameType) {
  const listCityVN = yield call(fakeCityApi.getAll);
  const listCountry = yield call(countryApi.getAll);
  const listType = yield call(fakeTypeApi.getAll);
  const listArrType = listType.filter((list) => list.link === nameType)[0];
  listArrType.listCountryType.listCountry = listCountry;
  listArrType.listCityType.listCity = listCityVN;

  yield put(tourActions.setListType(listArrType));
}

function* fetchDataTourList(nameType) {
  try {
    if (nameType.payload === "daytour") {
      yield all([
        // call(fetchApiListCityVietNam),
        // call(fetchApiListCountry),
        // call(fetchTourSingaporeList),
        // call(fetchTourMalaysiaList),
        // call(fetchTourThaiLandList),
        call(fetchApiListTypeDaytour, nameType.payload),
        yield put(tourActions.fetchDataSucceess()),
      ]);
    } else if (nameType.payload === "transport") {
      console.log("transport");
      yield all([
        call(fetchApiListTypeTransport, nameType.payload),
        yield put(tourActions.fetchDataSucceess()),
      ]);
    } else if (nameType.payload === "playground") {
      console.log("playground");
      yield all([
        call(fetchApiListTypePlayground, nameType.payload),
        yield put(tourActions.fetchDataSucceess()),
      ]);
    } else if (nameType.payload === "attraction") {
      console.log("attraction");
      yield all([
        call(fetchApiListTypeAttraction, nameType.payload),
        yield put(tourActions.fetchDataSucceess()),
      ]);
    } else if (nameType.payload === "sport") {
      console.log("sport");
      yield all([
        call(fetchApiListTypeSport, nameType.payload),
        yield put(tourActions.fetchDataSucceess()),
      ]);
    } else {
      yield all([
        call(fetchApiListTypeTransport, nameType.payload),
        yield put(tourActions.fetchDataSucceess()),
      ]);
      console.log("roongx");
    }
  } catch (error) {
    yield put(tourActions.fetchApiTourFailed());
  }
}

function* tourSaga() {
  yield takeLatest(tourActions.fetchApiTour.type, fetchDataTourList);
}

export default tourSaga;
