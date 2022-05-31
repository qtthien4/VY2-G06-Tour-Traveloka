const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  list: [],
  loadding: false,
  listCityVietNam: [],
  listCountry: [],
  listTourSingapore: [],
  listTourThailand: [],
  listTourMalaysia: [],
  listType: {},
};
const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    fetchApiTour(state) {
      state.loadding = true;
    },
    fetchDataSucceess(state) {
      state.loadding = false;
    },
    fetchApiTourSuccess: (state, action) => {
      state.loadding = false;
      state.list = action.payload;
    },
    fetchApiTourFailed() {
      console.log("failed");
    },
    setCityList(state, action) {
      state.listCityVietNam = action.payload;
    },
    setCountryList: (state, action) => {
      state.listCountry = action.payload;
    },
    setTourMalaysiaList: (state, action) => {
      state.listTourMalaysia = action.payload;
    },
    setTourThaiLanList: (state, action) => {
      state.listTourThailand = action.payload;
    },
    setTourSingaporeList: (state, action) => {
      state.listTourSingapore = action.payload;
    },
    setListType: (state, action) => {
      state.listType = action.payload;
    },
  },
});

export const tourActions = tourSlice.actions;

//selector
export const selectListTourLoadding = (state) => state.tour.loadding;
export const selectListTour = (state) => state.tour.list;
export const selectListCityTour = (state) => state.tour.listCityVietNam;
export const selectListSingaporeTour = (state) => state.tour.listTourSingapore;
export const selectListThailandTour = (state) => state.tour.listTourThailand;
export const selectListMalaysiaTour = (state) => state.tour.listTourMalaysia;
export const selectListCountryTour = (state) => state.tour.listCountry;

export const selectListType = (state) => {
  const newListType = { ...state.tour.listType };
  return newListType;
};

const tourReducer = tourSlice.reducer;
export default tourReducer;
