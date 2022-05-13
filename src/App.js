import { unwrapResult } from "@reduxjs/toolkit";
import { getMe } from "app/userSlice";
import SignIn from "features/Auth/pages/SignIn";
import Booking from "features/booking";
import Payment from "features/Payment";
import Product from "features/product";
import Search from "features/search";
import Tours from "features/tour";
import Xperience from "features/Xprerience";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

export default function App({ user }) {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/activities" element={<Xperience />}></Route>
        <Route path="/activities/category/daytour" element={<Tours />}></Route>
        <Route
          path="/activities/category/transport"
          element={<Tours />}
        ></Route>
        <Route
          path="/activities/category/playground"
          element={<Tours />}
        ></Route>
        <Route
          path="/activities/category/attraction"
          element={<Tours />}
        ></Route>
        <Route path="/activities/category/sport" element={<Tours />}></Route>

        <Route path="/activities/search/daytour" element={<Search />}>
          {/* <Route path=":id" element={<Search />}></Route> */}
        </Route>
        <Route path="/asd">
          {/* <Route path=":id" element={<Search />}></Route> */}
        </Route>
        <Route path="/activities/vietnam/product" element={<Product />}>
          <Route path=":id" element={<Product />}></Route>
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/booking" element={<Booking />}>
          <Route path="v2/:id" element={<Booking />} />
        </Route>
        <Route path="/booking/payment" element={<Payment />}>
          <Route path=":id" element={<Payment />} />
        </Route>
      </Routes>
    </div>
  );
}