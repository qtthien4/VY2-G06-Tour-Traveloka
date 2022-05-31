import { createSelector } from "reselect";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  listTour: [
    {
      ActivityName: "",
      Amount: 12,
      Desr: "",
      IdActivity: "",
      IdCity: "",
      IdCountry: "",
      IdPartner: "",
      Location: "",
      Price: 0,
      Stt: true,
      idtype: "",
      imageUrl: "",
    },
  ],
  search: "",
  listKeyWords: [],
  listRecentSearches: [],
};
const searchActivitySlice = createSlice({
  name: "searchActivity",
  initialState: initialState,
  reducers: {
    fetchSearchActivity(state) {
      state.loadding = true;
    },
    fetchSearchActivitySuccess(state, action) {
      state.loadding = false;
      state.listTour = action.payload;
    },
    fetchSearchActivityFailed(state) {
      state.loadding = false;
    },
    setFilterSearchChangeInput(state, action) {
      state.loadding = false;
      state.search = action.payload;
    },
    setRecentSearch(state, action) {
      state.loadding = false;
      state.listRecentSearches = action.payload;
    },
  },
});
export const searchActivityActions = searchActivitySlice.actions;

//selector
export const selectSearchActivityInput = (state) => state.searchActivity.search;
export const selectListTourSearchActivity = (state) =>
  state.searchActivity.listTour;

export const listRemainingSelectorTourSearch = createSelector(
  selectListTourSearchActivity,
  selectSearchActivityInput,
  (listTour, searchText) => {
    return listTour.filter((list) => {
      return (
        list.ActivityName.includes(searchText) ||
        list.Location.includes(searchText)
      );
    });
  }
);
// .filter((list) => {
//   return list.ActivityName.filter(searchText);
// });

//reducer

const searchActivityReducer = searchActivitySlice.reducer;

export default searchActivityReducer;
