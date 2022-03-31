import userApi from "api/userApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

//do suwr ungj nhieu noi nen dat o app

//tao asyn action
export const getMe = createAsyncThunk(
  "user/getMe",
  async (params, thunkAPI) => {
    //Cos ther disphat 1 action khac bang cach thunkApi.dispatch

    const currentUser = await userApi.getMe();
    return currentUser;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getMe.pending]: (state) => {
      state.loading = true;
    },
    [getMe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getMe.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
    },
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
