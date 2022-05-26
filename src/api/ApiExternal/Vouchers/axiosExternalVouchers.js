import queryString from "query-string";
const { default: axios } = require("axios");

const axiosExternalVouchers = axios.create({
  baseURL: "http://128.199.241.206:8080/api/v1/user/voucher",
  headers: {
    user_id: "456",
    partner_id: "a67f1f4e-946a-483b-9993-ca5c344da8f5",
    "Content-Type": "application/json;application/x-www-form-urlencoded",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosExternalVouchers.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosExternalVouchers.interceptors.response.use(
  (response) => {
    if (response) {
      return response;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosExternalVouchers;
