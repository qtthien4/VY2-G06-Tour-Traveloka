import tourApi from "api/ApiReal/tourApi";
import fakeAllTourApi from "api/fakeAllTourApi";
import fakeTourHcmApi from "api/fakeTourHcmApi";
import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { searchActions } from "./searchSlice";

function* fetchTourList(id) {
  try {
    const responsive = yield call(tourApi.getAll);

    const listTour = responsive.filter((listArrTour) => {
      return String(listArrTour.IdCity).trim() === String(id.payload).trim();
    });
    localStorage.setItem("listTour", JSON.stringify(listTour));
    yield put(searchActions.SetTourListOfCity(listTour));
  } catch (error) {
    console.log("loi", error);
  }
}

//api real
function* fetchCountryTour(id) {
  try {
    const responsive = yield call(tourApi.getAll);
    const listTour = responsive.filter((listArrTour) => {
      return String(listArrTour.IdCountry.trim()) === String(id.payload);
    });
    localStorage.setItem("listTour", JSON.stringify(listTour));

    yield put(searchActions.SetTourListOfCity(listTour));
  } catch (error) {
    console.log("loi", error);
  }
}

function* searchSaga() {
  console.log("search saga");
  yield takeEvery(searchActions.fetchTourList.type, fetchTourList);
  yield takeEvery(searchActions.fetchTourCountryList.type, fetchCountryTour);
}

export default searchSaga;
