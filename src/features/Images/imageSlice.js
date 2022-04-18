const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  list: [],
};
const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    fetchApiImage: (state) => {
      state.loadding = true;
    },
    fetchApiImageTourSuccess: (state, action) => {
      state.loadding = true;
      state.list = action.payload;
    },
    fetchApiImageTourFailed: () => {
      console.log("failed");
    },
  },
});

export const imageActions = imageSlice.actions;

//selector
export const selectListImageLoadding = (state) => state.image.loadding;

export const selectListImage = (state) => state.image.list;

const imageReducer = imageSlice.reducer;
export default imageReducer;
