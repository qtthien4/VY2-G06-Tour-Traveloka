import searchActivitySaga from "components/SearchActivities/searchActivitySaga";
import bookingSaga from "features/booking/bookingSaga";
import citySaga from "features/City/citySaga";
import countrySaga from "features/Country/countrySaga";
import imageSaga from "features/Images/imageSaga";
import productSaga from "features/product/productSaga";
import scheduleSaga from "features/schedule/scheduleSaga";
import searchSaga from "features/search/searchSaga";
import tourSaga from "features/tour/tourSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  console.log("rootSaga - ok");
  yield all([
    tourSaga(),
    searchSaga(),
    productSaga(),
    citySaga(),
    countrySaga(),
    searchActivitySaga(),
    bookingSaga(),
    imageSaga(),
    scheduleSaga(),
  ]);
}
