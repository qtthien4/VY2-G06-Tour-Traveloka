import scheduleApi from "api/ApiReal/scheduleApi";
import { scheduleActions } from "./ScheduleSlice";

const { takeLatest, call, put } = require("redux-saga/effects");

function* fetchApiScheduleApi(id) {
  const res = yield call(scheduleApi.getId, id.payload);
  console.log(res);
  yield put(scheduleActions.fetchApiScheduleSuccess(res));
}

function* scheduleSaga() {
  yield takeLatest(scheduleActions.fetchApiSchedule.type, fetchApiScheduleApi);
  console.log("Schedule saga");
}

export default scheduleSaga;
