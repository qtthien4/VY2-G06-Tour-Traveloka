const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  list: [],
};
const keysearchSlice = createSlice({
  name: "keysearch",
  initialState,
  reducers: {
    fetchApiKeysearch: (state) => {
      state.loadding = true;
    },
    fetchApiKeysearchTourSuccess: (state, action) => {
      state.loadding = true;
      state.list = action.payload;
    },
    fetchApiKeysearchTourFailed: () => {
      console.log("failed");
    },
  },
});

export const keysearchActions = keysearchSlice.actions;

//selector
export const selectListKeysearchLoadding = (state) => state.keysearch.loadding;

export const selectListKeysearch = (state) => state.keysearch.list;

const keysearchReducer = keysearchSlice.reducer;
export default keysearchReducer;
