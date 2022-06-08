import { unwrapResult } from "@reduxjs/toolkit";
import { getMe } from "app/userSlice";
import HeaderOnly from "components/layout/HeaderOnly";
import Login from "components/Login";
import NotFound from "components/NotFount";
import PageNotFount from "components/PageNotFount";
import Register from "components/Register";
import SignIn from "features/Auth/pages/SignIn";
import Booking from "features/booking";
import Payment from "features/Payment";
import Product from "features/product";
import Refund from "features/Refund";
import Search from "features/search";
import Tours from "features/tour";
import Transaction from "features/Transaction";
import Xperience from "features/Xprerience";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import useToken from "Hooks/useToken";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

export default function App({ user }) {
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  const { token, setToken } = useToken();
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route
          path="/activities"
          element={
            <HeaderOnly>
              <Xperience />
            </HeaderOnly>
          }
        ></Route>
        <Route
          path="/activities/category/daytour"
          element={
            <HeaderOnly>
              <Tours />
            </HeaderOnly>
          }
        ></Route>
        <Route
          path="/activities/category/transport"
          element={
            <HeaderOnly>
              <Tours />
            </HeaderOnly>
          }
        ></Route>
        <Route
          path="/activities/category/playground"
          element={
            <HeaderOnly>
              <Tours />
            </HeaderOnly>
          }
        ></Route>
        <Route
          path="/activities/category/attraction"
          element={
            <HeaderOnly>
              <Tours />
            </HeaderOnly>
          }
        ></Route>
        <Route
          path="/activities/category/sport"
          element={
            <HeaderOnly>
              <Tours />
            </HeaderOnly>
          }
        ></Route>

        <Route
          path="/activities/search/daytour"
          element={
            <HeaderOnly>
              <Search />
            </HeaderOnly>
          }
        ></Route>
        <Route
          path="/activities/search/transport"
          element={
            <HeaderOnly>
              <Search />
            </HeaderOnly>
          }
        ></Route>
        <Route
          path="/activities/search/sport"
          element={
            <HeaderOnly>
              <Search />
            </HeaderOnly>
          }
        ></Route>
        <Route
          path="/activities/search/playground"
          element={
            <HeaderOnly>
              <Search />
            </HeaderOnly>
          }
        ></Route>
        <Route
          path="/activities/search/attraction"
          element={
            <HeaderOnly>
              <Search />
            </HeaderOnly>
          }
        ></Route>

        <Route path="/asd"></Route>
        <Route
          path="/activities/product"
          element={
            <HeaderOnly>
              <Product />
            </HeaderOnly>
          }
        >
          <Route
            path=":id"
            element={
              <HeaderOnly>
                <Product />
              </HeaderOnly>
            }
          ></Route>
        </Route>
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />}>
          <Route path="v2/:id" element={<Booking />} />
        </Route>
        <Route path="/booking/payment" element={<Payment />}>
          <Route path=":id" element={<Payment />} />
        </Route>
        <Route path="/booking/refund" element={<Refund />}>
          <Route path=":id" element={<Refund />} />
        </Route>
        <Route path="/booking/transaction" element={<Transaction />}>
          <Route path=":id" element={<Transaction />} />
        </Route>
        <Route path="*" element={<PageNotFount />} />
      </Routes>
    </div>
  );
}
