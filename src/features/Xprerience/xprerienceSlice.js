const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  list: [],
};
const xprerienceSlice = createSlice({
  name: "xprerience",
  initialState,
  reducers: {
    fetchApiXprerience: (state) => {
      state.loadding = true;
    },
    fetchApiXprerienceTourSuccess: (state, action) => {
      state.loadding = true;
      state.list = action.payload;
    },
    fetchApiXprerienceTourFailed: () => {
      console.log("failed");
    },
  },
});

export const xprerienceActions = xprerienceSlice.actions;

//selector
export const selectListXprerienceLoadding = (state) =>
  state.xprerience.loadding;

export const selectListXprerience = (state) => state.xprerience.list;

const xprerienceReducer = xprerienceSlice.reducer;
export default xprerienceReducer;
