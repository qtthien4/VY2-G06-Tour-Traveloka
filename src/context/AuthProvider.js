import { unwrapResult } from "@reduxjs/toolkit";
import { getMe } from "app/userSlice";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
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
          setUser(currentUser);
          //   console.log("logged in user redux:", currentUser);
          //   const token = await user.getIdToken();
          //   console.log("Logged in user token:", token);
        } catch (error) {
          console.log("fail to login");
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [dispatch]);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
