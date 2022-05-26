import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const paypalSlice = createSlice({
  name: "paypal",
  initialState,
  reducers: {
    setPayment: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const paypalActions = paypalSlice.actions;

const paypalReducer = paypalSlice.reducer;
export default paypalReducer;
