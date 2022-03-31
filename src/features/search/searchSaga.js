import fakeTourHcmApi from "api/fakeTourHcmApi";
import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { searchActions } from "./searchSlice";

function* fetchTourList(id) {
  try {
    const responsive = yield call(fakeTourHcmApi.getAll);
    const listTour = responsive.filter((listArrTour) => {
      return listArrTour.idCity === id.payload;
    });

    yield put(searchActions.SetTourListOfCity(listTour));
  } catch (error) {
    console.log("loi", error);
  }
}
function* searchSaga() {
  console.log("search saga");
  yield takeEvery(searchActions.fetchTourList.type, fetchTourList);
}

export default searchSaga;
