const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  tour: {},
  Schedule: {},
};

const bookingSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchTour(state) {
      state.loadding = true;
    },
    fetchProduct(state) {
      state.loadding = true;
    },
    fetchProductSuccess(state, action) {
      state.loadding = false;
      state.tour = action.payload;
    },
    fetchProductFaild(state, action) {
      state.loading = false;
    },
    setProduct(state, action) {
      state.loadding = true;
      state.tour = action.payload;
    },
  },
});

//action
export const bookingActions = bookingSlice.actions;
//selector
export const selectTour = (state) => state.booking.tour;
export const selectScheduleTour = (state) => state.booking.Schedule;

//reducers
const bookingReducer = bookingSlice.reducer;
export default bookingReducer;
