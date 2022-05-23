const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  tour: {
    ActivityName: "",
    Amount: 12,
    Desr: "",
    IdActivity: "",
    IdCity: "",
    IdCountry: "",
    Idpartner: "",
    ImageUrl: "",
    Location: "",
    Price: 0,
    Stt: true,
    idtype: "",
  },
  Schedule: {},
  listImage: [],
  listSchedule: [
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

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct(state) {
      state.loadding = true;
    },
    fetchDataSuccess(state, action) {
      state.loadding = false;
    },
    fetchProductSuccess(state, action) {
      state.loadding = false;
      state.tour = action.payload;
    },
    fetchProductFaild(state, action) {
      state.loading = false;
    },
    setSchedule(state, action) {
      state.loadding = true;
      state.Schedule = action.payload;
    },
    setImageTourSuccess: (state, action) => {
      state.loadding = true;
      state.listImage = action.payload;
    },
    setScheduleSuccess: (state, action) => {
      state.loadding = true;
      state.listSchedule = action.payload;
    },
  },
});

//action
export const productActions = productSlice.actions;
//selector
export const selectTour = (state) => state.product.tour;
export const selectScheduleTour = (state) => state.product.listSchedule;
export const selectImageTour = (state) => state.product.listImage;

//reducers
const productReducer = productSlice.reducer;
export default productReducer;
