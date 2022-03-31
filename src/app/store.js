import cityReducer from "features/City/citySlice";
import createSagaMiddleware from "redux-saga";
import countryReducer from "features/Country/countrySlice";
import photoReducer from "features/Photo/PhotoSlice";
import tourReducer from "features/tour/tourSlice";
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import rootSaga from "./rootSaga";
import searchReducer from "features/search/searchSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  photos: photoReducer,
  user: userReducer,
  tour: tourReducer,
  country: countryReducer,
  city: cityReducer,
  search: searchReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
