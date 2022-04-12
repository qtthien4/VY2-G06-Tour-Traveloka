import tourApi from "api/ApiReal/tourApi";
import fakeAllTourApi from "api/fakeAllTourApi";
import fakeTourHcmApi from "api/fakeTourHcmApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { productActions } from "./productSlice";

// function* fetchDataProduct(idTour) {
//   const responsive = yield call(fakeAllTourApi.getAll);
//   const product = responsive.filter((product) => {
//     return Number(product.experienceId) === Number(idTour.payload);
//   });
//   console.log("product", product);
//   yield put(productActions.fetchProductSuccess(product[0]));
// }

//api thuc te

function* fetchDataProduct(idTour) {
  const responsive = yield call(tourApi.getAll);
  const product = responsive.filter((product) => {
    return String(product.IdActivity).trim() === String(idTour.payload);
  });
  console.log("product", product);
  yield put(productActions.fetchProductSuccess(product[0]));
}

function* productSaga() {
  yield takeLatest(productActions.fetchProduct.type, fetchDataProduct);
  console.log("productSaga");
}

export default productSaga;
