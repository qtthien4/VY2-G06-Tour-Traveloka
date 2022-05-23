import tourApi from "api/ApiReal/tourApi";
import fakeTypeApi from "api/apiType/fakeTypeApi";
import fakeAllTourApi from "api/fakeAllTourApi";
import fakeTourHcmApi from "api/fakeTourHcmApi";
import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { searchActions } from "./searchSlice";

function* fetchTourList(props) {
  const { id, nameType } = props.payload;
  try {
    const responsive = yield call(tourApi.getAll);
    const listTypeAll = yield call(fakeTypeApi.getAll);

    const Type = listTypeAll.find((list) => {
      return String(list.link === nameType);
    });

    const listTour = responsive.filter((listArrTour) => {
      return (
        String(listArrTour.IdCity).trim() === String(id).trim() &&
        listArrTour.idtype.trim() === String(Type.idType)
      );
    });

    localStorage.setItem("listTour", JSON.stringify(listTour));
    yield put(searchActions.SetTourListOfCity(listTour));
  } catch (error) {
    console.log("loi", error);
  }
}

//api real
function* fetchCountryTour(props) {
  const { id, nameType } = props.payload;
  try {
    const responsive = yield call(tourApi.getAll);
    const listTypeAll = yield call(fakeTypeApi.getAll);

    let Type = listTypeAll.filter((list) => {
      return list.link == nameType;
    });
    const listTour = responsive.filter((listArrTour) => {
      return (
        String(listArrTour.IdCountry).trim() === String(id).trim() &&
        String(listArrTour.idtype).trim() == String(Type[0].idType).trim() &&
        listArrTour.Stt === true
      );
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
