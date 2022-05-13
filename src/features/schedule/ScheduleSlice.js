const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  list: [],
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
    fetchApiScheduleFailed: () => {
      console.log("failed");
    },
  },
});

export const scheduleActions = scheduleSlice.actions;

//selector
export const selectListScheduleLoadding = (state) => state.schedule.loadding;

export const selectListSchedule = (state) => state.schedule.list;

const scheduleReducer = scheduleSlice.reducer;
export default scheduleReducer;