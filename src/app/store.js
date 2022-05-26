import cityReducer from "features/City/citySlice";
import createSagaMiddleware from "redux-saga";
import countryReducer from "features/Country/countrySlice";
import photoReducer from "features/Photo/PhotoSlice";
import tourReducer from "features/tour/tourSlice";
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import rootSaga from "./rootSaga";
import searchReducer from "features/search/searchSlice";
import productReducer from "features/product/productSlice";
import searchActivityReducer from "components/SearchActivities/searchActivitySlice";
import bookingReducer from "features/booking/bookingSlice";
import imageReducer from "features/Images/imageSlice";
import scheduleReducer from "features/schedule/ScheduleSlice";
import favauriteReducer from "features/Favaurite/favauriteSlice";
import keysearchReducer from "features/Keysearch/keysearchSlice";
import xprerienceReducer from "features/Xprerience/xprerienceSlice";
import refundReducer from "features/Refund/RefundSlice";
import paypalReducer from "PayPal/paypalSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  photos: photoReducer,
  user: userReducer,
  tour: tourReducer,
  country: countryReducer,
  city: cityReducer,
  search: searchReducer,
  product: productReducer,
  searchActivity: searchActivityReducer,
  booking: bookingReducer,
  image: imageReducer,
  schedule: scheduleReducer,
  favaurite: favauriteReducer,
  keysearch: keysearchReducer,
  xprerience: xprerienceReducer,
  refund: refundReducer,
  paypal: paypalReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
