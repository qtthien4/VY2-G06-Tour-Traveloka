const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  list: [
    {
      IdCity: "",
      IdCountry: "",
      CityName: "",
    },
  ],
};
const citySlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    fetchApiCity: (state) => {
      state.loadding = true;
    },
    fetchApiCityTourSuccess: (state, action) => {
      state.loadding = true;
      state.list = action.payload;
    },
    fetchApiCityTourFailed: () => {
      console.log("failed");
    },
  },
});

export const cityActions = citySlice.actions;

//selector
export const selectListCityLoadding = (state) => state.city.loadding;

export const selectListCity = (state) => state.city.list;

const cityReducer = citySlice.reducer;
export default cityReducer;
