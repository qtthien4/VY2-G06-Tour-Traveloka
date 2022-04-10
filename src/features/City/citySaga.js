import fakeCityApi from "api/fakeCityApi";

const { takeLatest, call, put } = require("redux-saga/effects");
const { cityActions } = require("./citySlice");
function* fetchCityApi() {
  const res = yield call(fakeCityApi.getAll);
  yield put(cityActions.fetchApiCityTourSuccess(res));
}

function* citySaga() {
  yield takeLatest(cityActions.fetchApiCity.type, fetchCityApi);
}

export default citySaga;
