const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  listFilter: [],
  list: [
    {
      IdCountry: "",
      CountryName: "",
      imageUrl: "",
    },
  ],
  name:"",
};
const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    fetchApiCountry: (state) => {
      state.loadding = true;
    },
    fetchApiCountrySearch: (state) => {
      state.loadding = true;
    },

    fetchApiCountryFilter: (state) => {
      state.loadding = true;
    },
    fetchApiCountryFilterSuccess: (state, action) => {
      state.loadding = true;
      state.listFilter = action.payload;
    },
    fetchApiCountryTourSuccess: (state, action) => {
      state.loadding = true;
      state.list = action.payload;
    },
    fetchApiCountryTourName: (state, action) => {
      state.loadding = true;
      state.name = action.payload;
    },
    fetchApiCountryTourFailed: () => {
      console.log("failed");
    },
  },
});

export const countryActions = countrySlice.actions;

//selector
export const selectListCountryLoadding = (state) => state.country.loadding;

export const selectListCountry = (state) => state.country.list;
export const selectCountryName = (state) => state.country.name;


export const selectListCountryFilter = (state) => state.country.listFilter;


const countryReducer = countrySlice.reducer;
export default countryReducer;
