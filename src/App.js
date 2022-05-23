import { unwrapResult } from "@reduxjs/toolkit";
import { getMe } from "app/userSlice";
import Login from "components/Login";
import Register from "components/Register";
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
  // const [token, setToken] = useState();
  // console.log("token", token);
  const navigate = useNavigate();
  const { token, setToken } = useToken();
  //console.log("token", token);

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

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
        <Route path="/activities/search/transport" element={<Search />}>
          {/* <Route path=":id" element={<Search />}></Route> */}
        </Route>
        <Route path="/activities/search/sport" element={<Search />}>
          {/* <Route path=":id" element={<Search />}></Route> */}
        </Route>
        <Route path="/activities/search/playground" element={<Search />}>
          {/* <Route path=":id" element={<Search />}></Route> */}
        </Route>
        <Route path="/activities/search/attraction" element={<Search />}>
          {/* <Route path=":id" element={<Search />}></Route> */}
        </Route>

        <Route path="/asd">
          {/* <Route path=":id" element={<Search />}></Route> */}
        </Route>
        <Route path="/activities/vietnam/product" element={<Product />}>
          <Route path=":id" element={<Product />}></Route>
        </Route>
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/register" element={<Register />} />
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
