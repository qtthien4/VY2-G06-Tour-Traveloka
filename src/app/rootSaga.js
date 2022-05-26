import searchActivitySaga from "components/SearchActivities/searchActivitySaga";
import bookingSaga from "features/booking/bookingSaga";
import citySaga from "features/City/citySaga";
import countrySaga from "features/Country/countrySaga";
import favauriteSaga from "features/Favaurite/favauriteSaga";
import imageSaga from "features/Images/imageSaga";
import keysearchSaga from "features/Keysearch/keysearchSaga";
import productSaga from "features/product/productSaga";
import refundSaga from "features/Refund/refundSaga";
import scheduleSaga from "features/schedule/scheduleSaga";
import searchSaga from "features/search/searchSaga";
import tourSaga from "features/tour/tourSaga";
import xprerienceSaga from "features/Xprerience/xprerienceSaga";
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
    favauriteSaga(),
    keysearchSaga(),
    xprerienceSaga(),
    refundSaga(),
  ]);
}
