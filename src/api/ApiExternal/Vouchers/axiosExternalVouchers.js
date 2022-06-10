import queryString from "query-string";
const { default: axios } = require("axios");

const axiosExternalVouchers = axios.create({
  baseURL: "https://api.votuan.xyz/api/v1/user",
  // headers: {
  //   user_id: "68100596-F731-4C31-8C1E-DC813C6CBAF7",
  //   partner_id: "ACA423B3-F1C8-4484-A8D1-8A73ED6DAB60",
  //   "Content-Type": "application/json;application/x-www-form-urlencoded",
  // },
  paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosExternalVouchers;
