import imageApi from "api/ApiReal/imageApi";
import { imageActions } from "./imageSlice";

const { takeLatest, call, put } = require("redux-saga/effects");

function* fetchApiImageApi(id) {
  const res = yield call(imageApi.getId, id.payload);
  yield put(imageActions.fetchApiImageTourSuccess(res));
}

function* imageSaga() {
  yield takeLatest(imageActions.fetchApiImage.type, fetchApiImageApi);
  console.log("image saga");
}

export default imageSaga;
