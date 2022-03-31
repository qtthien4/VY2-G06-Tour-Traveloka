const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  list: [],
};
const countrySlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    fetchApiCountry: (state) => {
      state.loadding = true;
    },
    fetchApiCountryTourSuccess: (state, action) => {
      state.loadding = true;
      state.list = action.payload;
    },
    fetchApiCountryTourFailed: () => {
      console.log("failed");
    },
  },
});

export const countryActions = countrySlice.actions;

//selector
export const selectListCountryLoadding = (state) => state.tour.loadding;

export const selectListCountry = (state) => state.country.list;

const countryReducer = countrySlice.reducer;
export default countryReducer;
