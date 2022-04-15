const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  tour: {},
  Schedule: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
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
    setSchedule(state, action) {
      state.loadding = true;
      state.Schedule = action.payload;
    },
  },
});

//action
export const productActions = productSlice.actions;
//selector
export const selectTour = (state) => state.product.tour;
export const selectScheduleTour = (state) => state.product.Schedule;

//reducers
const productReducer = productSlice.reducer;
export default productReducer;
