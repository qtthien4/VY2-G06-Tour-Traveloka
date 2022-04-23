const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  list: [],
};
const favauriteSlice = createSlice({
  name: "favaurite",
  initialState,
  reducers: {
    fetchApiFavaurite: (state) => {
      state.loadding = true;
    },
    fetchApiFavauriteTourSuccess: (state, action) => {
      state.loadding = true;
      state.list = action.payload;
    },
    fetchApiFavauriteTourFailed: () => {
      console.log("failed");
    },
  },
});

export const favauriteActions = favauriteSlice.actions;

//selector
export const selectListFavauriteLoadding = (state) => state.favaurite.loadding;

export const selectListFavaurite = (state) => state.favaurite.list;

const favauriteReducer = favauriteSlice.reducer;
export default favauriteReducer;
