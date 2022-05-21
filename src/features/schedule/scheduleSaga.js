import scheduleApi from "api/ApiReal/scheduleApi";
import { scheduleActions } from "./ScheduleSlice";

const { takeLatest, call, put } = require("redux-saga/effects");

function* fetchApiScheduleApi(id) {
  const res = yield call(scheduleApi.getId, id.payload);
  const arr = res.filter((list) => list.IdActivity.trim() === id.payload);
  localStorage.setItem("scheduleList", JSON.stringify(arr));
  yield put(scheduleActions.fetchApiScheduleSuccess(arr));
}

function* scheduleSaga() {
  yield takeLatest(scheduleActions.fetchApiSchedule.type, fetchApiScheduleApi);
  console.log("Schedule saga");
}

export default scheduleSaga;
