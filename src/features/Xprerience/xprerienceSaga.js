import countryApi from "api/ApiReal/country";
import { xprerienceActions } from "features/Xprerience/xprerienceSlice";

const { takeLatest, call, put } = require("redux-saga/effects");
function* fetchXprerienceApi(nameType) {
  //console.log("type", nameType.payload);
  //   const res = yield call(countryApi.getAll);
  //   localStorage.setItem("country", JSON.stringify(res));
  //yield put(xprerienceActions.fetchApiCountryTourSuccess());
}

function* xprerienceSaga() {
  yield takeLatest(
    xprerienceActions.fetchApiXprerience.type,
    fetchXprerienceApi
  );
}

export default xprerienceSaga;
