import keysearchApi from "api/ApiReal/keysearchApi";
import { keysearchActions } from "./keysearchSlice";
import { fetchApiKeysearch } from "./keysearchSlice";

const { takeLatest, call, put } = require("redux-saga/effects");
function* fetchKeysearchApi() {
  const res = yield call(keysearchApi.getAll);
  console.log(res);
  // localStorage.setItem("keysearch", JSON.stringify(res));
  yield put(keysearchActions.fetchApiKeysearchTourSuccess(res));
}

function* keysearchSaga() {
  yield takeLatest(keysearchActions.fetchApiKeysearch.type, fetchKeysearchApi);
}

export default keysearchSaga;
