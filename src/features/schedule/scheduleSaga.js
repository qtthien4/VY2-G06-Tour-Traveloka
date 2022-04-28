import scheduleApi from "api/ApiReal/scheduleApi";
import { scheduleActions } from "./ScheduleSlice";

const { takeLatest, call, put } = require("redux-saga/effects");

function* fetchApiScheduleApi(id) {
  const res = yield call(scheduleApi.getAll);
  const arr = res.filter((list) => list.IdSchedule.trim() == id.payload);
  yield put(scheduleActions.fetchApiScheduleSuccess(arr));
}

function* scheduleSaga() {
  yield takeLatest(scheduleActions.fetchApiSchedule.type, fetchApiScheduleApi);
  console.log("Schedule saga");
}

export default scheduleSaga;
