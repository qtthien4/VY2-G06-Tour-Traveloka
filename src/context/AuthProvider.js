import { unwrapResult } from "@reduxjs/toolkit";
import { getMe } from "app/userSlice";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import useToken from "Hooks/useToken";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  //handleOnclickXperience

  useEffect(() => {

    setUser(user);
  }, [user]);
  // useEffect(()=>{
  

  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   const unregisterAuthObserver = () => {
  //     try {
  //       // const actionResult = await dispatch(getMe());
  //       // const currentUser = unwrapResult(actionResult);
  //       setUser(user1);
  //       //setUser(currentUser);
  //       //const token = await user.getIdToken();
  //       // console.log("Logged in user token:", token);
  //     } catch (error) {
  //       console.log("fail to login");
  //     }
  //   };
  //   unregisterAuthObserver();
  //   console.log("logged in user redux:", user);
  // }, [dispatch]);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
