import imageApi from "api/ApiReal/imageApi";
import scheduleApi from "api/ApiReal/scheduleApi";
import tourApi from "api/ApiReal/tourApi";
import fakeAllTourApi from "api/fakeAllTourApi";
import fakeTourHcmApi from "api/fakeTourHcmApi";
import { imageActions } from "features/Images/imageSlice";
import { call, all, put, takeLatest } from "redux-saga/effects";
import { productActions } from "./productSlice";

//api thuc te
function* fetchApiListImage(idTour) {
  const res = yield call(imageApi.getId, idTour.payload);
  yield put(productActions.setImageTourSuccess(res));
}
function* fetchApiListSchedule(idTour) {
  const res = yield call(scheduleApi.getId, idTour.payload);
  const listSchedule = res.filter((res) => {
    return res.stt === true;
  });
  yield put(productActions.setScheduleSuccess(res));
}
function* fetchDataProduct(idTour) {
  const responsive = yield call(tourApi.getAll);
  const product = responsive.filter((product) => {
    return String(product.IdActivity).trim() === String(idTour.payload);
  });

  localStorage.setItem("partnerInfoId", JSON.stringify(product[0].Idpartner));

  yield put(productActions.fetchProductSuccess(product[0]));
}

function* fetchData(idTour) {
  try {
    yield all([
      call(fetchDataProduct, idTour),
      call(fetchApiListImage, idTour),
      call(fetchApiListSchedule, idTour),
    ]);
    yield put(productActions.fetchDataSuccess());
  } catch (error) {
    yield put(productActions.fetchProductFaild());
    console.log("fail to fetch product Data", error);
  }
}

function* productSaga() {
  yield takeLatest(productActions.fetchProduct.type, fetchData);
  console.log("productSaga");
}

export default productSaga;
