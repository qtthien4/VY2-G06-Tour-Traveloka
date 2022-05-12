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
  const lists = [...state.search.listTour];
  if (state.search.filters.Price === "1") {
    return lists.sort(function (a, b) {
      return Number(b.Price) - Number(a.Price);
    });
  } else {
    return lists.sort(function (a, b) {
      return Number(a.Price) - Number(b.Price);
    });
  }
};
export const selectTour = (state) => state.search.listTour;

export const SelectFilterPrice = (state) => state.search.filters.Price;

//reducer
const searchReducer = searchSlice.reducer;
export default searchReducer;
