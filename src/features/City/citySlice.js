const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  list: [
    {
      experienceId: "",
      idCountry: "",
      image: "",
      name: "",
    },
  ],
  name:""
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
    fetchApiCityTourName: (state, action) => {
      state.loadding = true;
      state.name = action.payload;
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
export const selectNameCity = (state) => state.city.name;


const cityReducer = citySlice.reducer;
export default cityReducer;
