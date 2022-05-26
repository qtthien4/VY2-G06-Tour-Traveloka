import bookingApi from "api/ApiReal/bookingApi";
import { takeLatest, call } from "redux-saga/effects";
import { refundAction } from "./RefundSlice";
function* fetchDataList(idPayment) {
  const res = yield call(bookingApi.get);
}
function* refundSaga() {
  console.log("refundSaga");
  yield takeLatest(refundAction.fetchApiRefund.type, fetchDataList);
}
export default refundSaga;
