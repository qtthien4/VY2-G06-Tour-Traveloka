const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadding: false,
  tour: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct(state) {
      state.loadding = true;
    },
    fetchProductSuccess(state, action) {
      state.loadding = false;
      state.tour = action.payload;
    },
    fetchProductFaild(state, action) {
      state.loading = false;
    },
    setProduct(state, action) {
      state.loadding = true;
      state.tour = action.payload;
    },
  },
});

//action
export const productActions = productSlice.actions;
//selector
export const selectTour = (state) => state.product.tour;
//reducers
const productReducer = productSlice.reducer;
export default productReducer;
