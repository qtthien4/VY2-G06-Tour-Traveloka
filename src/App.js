import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Link,
  matchRoutes,
  useLocation,
  useRoutes,
  Route,
  Routes,
  useResolvedPath,
} from "react-router-dom";
import Dashboard from "./features/Photo/pages/DashBoard";
import Team from "./features/Photo/pages/Team";
import AddEditPage from "features/Photo/pages/AddEditPage";
import MainPage from "features/Photo/pages/MainPage";
import productApi from "api/productApi";
import SignIn from "features/Auth/pages/SignIn";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/auth";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { getMe } from "app/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import DashBoard from "./features/Photo/pages/DashBoard";
import Xperience from "features/Xprerience";
import Tours from "features/tour";
import Product from "features/product";
import Search from "features/search";
import Booking from "features/booking";
//const Photo = React.lazy(()=>import('./features/Photo'))

// Import FirebaseAuth and firebase.

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);
const routes = [
  {
    path: "/new-dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: <MainPage /> },
      {
        path: "add",
        element: <AddEditPage />,
        children: [{ path: ":id", element: <AddEditPage /> }],
      },
      { path: "sales", element: <p>Sales</p> },
    ],
  },
  {
    path: "/team",
    element: <Team />,
    children: [
      { path: "", element: <p>Overview</p> },
      {
        path: "group",
        element: <p>group</p>,
      },
      { path: "dicuss", element: <p>Sales</p> },
    ],
  },
  { path: "/projects", element: <p>Project</p> },
  { path: "/calendar", element: <p>Overview</p> },
  { path: "/sign-in", element: <SignIn /> },
];

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        //setIsSignedIn(!!user);
        if (!user) {
          //user logout
          console.log("not loggin");
          return;
        }

        try {
          const actionResult = await dispatch(getMe());
          const currentUser = unwrapResult(actionResult);

          console.log("logged in user redux:", currentUser);
          const token = await user.getIdToken();
          console.log("Logged in user token:", token);
        } catch (error) {
          console.log("fail to login");
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  let element = useRoutes(routes);
  return (
    <div className="min-h-screen bg-white">
      <div>{element}</div>
      <Routes>
        <Route path="/activities" element={<Xperience />}></Route>
        <Route path="/activities/category/daytour" element={<Tours />}></Route>
        <Route path="/activities/search" element={<Search />}>
          <Route path=":id" element={<Search />}></Route>
        </Route>
        <Route path="/activities/vietnam/product" element={<Product />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}
