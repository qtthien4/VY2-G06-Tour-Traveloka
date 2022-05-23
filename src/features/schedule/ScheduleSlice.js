const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  amount: 0,
  list: [
    {
      Amount: 0,
      AmountBooking: 0,
      EndTime: "",
      IdActivity: "",
      IdSchedule: "",
      StartTime: "",
      Status: true,
    },
  ],
};
const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    fetchApiSchedule: (state) => {
      state.loadding = true;
    },
    fetchApiScheduleSuccess: (state, action) => {
      state.loadding = true;
      state.list = action.payload;
    },
    fetchApiScheduleAmount: (state, action) => {
      state.loadding = true;
      state.amount = action.payload;
    },
    fetchApiScheduleFailed: () => {
      console.log("failed");
    },
  },
});

export const scheduleActions = scheduleSlice.actions;

//selector
export const selectListScheduleLoadding = (state) => state.schedule.loadding;

export const selectListSchedule = (state) => state.schedule.list;
export const selectScheduleAmount = (state) => state.schedule.amount;


const scheduleReducer = scheduleSlice.reducer;
export default scheduleReducer;
