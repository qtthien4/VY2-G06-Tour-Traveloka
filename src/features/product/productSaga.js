import fakeTourHcmApi from "api/fakeTourHcmApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { productActions } from "./productSlice";

function* fetchDataProduct(idTour) {
  const responsive = yield call(fakeTourHcmApi.getAll);
  const product = responsive.filter((product) => {
    return product.experienceId === idTour.payload;
  });
  yield put(productActions.fetchProductSuccess(product));
}
function* productSaga() {
  yield takeLatest(productActions.fetchProduct.type, fetchDataProduct);
  console.log("productSaga");
}

export default productSaga;
