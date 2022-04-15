import tourApi from "api/ApiReal/tourApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { bookingActions } from "./bookingSlice";

function* fetchDataProduct(idTour) {
  const responsive = yield call(tourApi.getAll);
  const product = responsive.filter((product) => {
    return String(product.IdActivity).trim() === String(idTour.payload);
  });
  console.log("product", product);
  yield put(bookingActions.setProduct(product[0]));
}

function* bookingSaga() {
  yield takeLatest(bookingActions.fetchTour.type, fetchDataProduct);
  console.log("bookingSaga");
}

export default bookingSaga;
