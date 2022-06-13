import axios from "axios";
import "firebase/analytics";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/firestore";
import queryString from "query-string";

const getFirebaseToken = () => {
  //current has user => return get it token
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  //current id has null
  const hasRememberAccount = localStorage.getItem(
    "firebaseui::rememberedAccounts"
  );
  if (!hasRememberAccount) return null;

  //wait
  return Promise((resolve, reject) => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          reject(null);
        }
        const token = await user.getIdToken();
        console.log("AXIOS TOKEN:", token);
        resolve(token);
        unregisterAuthObserver();
      });
  });
};
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    // "Access-Control-Allow-Origin": "95.111.203.185:3003",
    "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // const currentUser = firebase.auth().currentUser;
  // if(currentUser){
  //     const token = await currentUser.getIdToken();
  //     config.headers.Authorization = `Bearer ${token}`
  // }
  const token = await getFirebaseToken();

  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
