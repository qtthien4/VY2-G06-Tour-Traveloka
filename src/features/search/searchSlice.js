const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  listTour: [],
  setFilter: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchTourList(state) {
      state.loadding = true;
    },
    fetchTourCountryList(state) {
      state.loadding = true;
    },
    fetchTourListSuccess(state, action) {
      state.loadding = false;
    },
    fetchTourListFailed(state) {
      state.loadding = false;
    },
    SetTourListOfCity(state, action) {
      state.listTour = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

//selector
export const SelectListTourOfCity = (state) => state.search.listTour;

//reducer
const searchReducer = searchSlice.reducer;
export default searchReducer;
