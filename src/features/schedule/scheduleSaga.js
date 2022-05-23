import scheduleApi from "api/ApiReal/scheduleApi";
import { scheduleActions } from "./ScheduleSlice";

const { takeLatest, call, put } = require("redux-saga/effects");

function* fetchApiScheduleApi(props) {
  const { idTour, selectedValue } = props.payload;
  if (idTour == undefined && selectedValue == undefined) return;

  const res = yield call(scheduleApi.getId, idTour);
  const arr = res.filter(
    (list) => list.IdSchedule.trim() === selectedValue.trim()
  );
  const amount = arr[0].Amount;
  console.log("ok", idTour, selectedValue, amount);

  yield put(scheduleActions.fetchApiScheduleSuccess(arr));
  yield put(scheduleActions.fetchApiScheduleAmount(amount));
}

function* scheduleSaga() {
  yield takeLatest(scheduleActions.fetchApiSchedule.type, fetchApiScheduleApi);
  console.log("Schedule saga");
}

export default scheduleSaga;
