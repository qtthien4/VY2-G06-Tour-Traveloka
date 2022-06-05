import fakeCityApi from "api/fakeCityApi";

const { takeLatest, call, put } = require("redux-saga/effects");
const { cityActions } = require("./citySlice");
function* fetchCityApi(id) {
  const res = yield call(fakeCityApi.getAll);
  let city = res.filter((list) => list.experienceId === String(id.payload));
  console.log("city", city[0].name, res);
  localStorage.setItem("city", JSON.stringify(res));
  yield put(cityActions.fetchApiCityTourSuccess(res));
  yield put(cityActions.fetchApiCityTourName(city[0].name));
}

function* citySaga() {
  yield takeLatest(cityActions.fetchApiCity.type, fetchCityApi);
}

export default citySaga;
