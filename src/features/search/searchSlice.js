const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  listTour: [],
  filters: {
    search: "",
    Price: "",
    check: "",
  },
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
      state.loadding = false;
      state.listTour = action.payload;
    },
    setFiterHeader(state, action) {
      state.filters.Price = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}
//selector
export const SelectListTourOfCity = (state) => {
  if (state.search.filters.Price === "1") {
    // console.log(state.search.listTour);
    // console.log(
    //   state.search.listTour.sort(function (a, b, c, d, e,g,h,i,k) {
    //     return a.experienceId - b.experienceId;
    //   })
    // );
    return state.search.listTour;
  } else {
    //console.log(state.search.listTour);
    return state.search.listTour;
  }
};

export const SelectFilterPrice = (state) => state.search.filters.Price;

//reducer
const searchReducer = searchSlice.reducer;
export default searchReducer;
