const { createSlice } = require("@reduxjs/toolkit");

const refundSlice = createSlice({
  name: "refund",
  initialState: [],
  reducers: {
    fetchApiRefund() {},
    fetchApiRefundSuccess() {},
    fetchApiRefundFailed() {},
  },
});

//action
export const refundAction = refundSlice.actions;

//selector
export const paymentPaypal = (state) => state.paypal;

//reducers
const refundReducer = refundSlice.reducer;

export default refundReducer;
