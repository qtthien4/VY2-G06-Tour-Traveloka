const { default: axiosClient } = require("../axiosClient");

const userApi = {
  register: (data) => {
    const url = "/registeruser";
    axiosClient.post(url, data);
  },
  login: (data) => {
    const url = "/customer";
    axiosClient.post(url, data);
  },
  userbooking: (data) => {
    const url = "/userbooking";
    axiosClient.post(url, data);
  },
};

export default userApi;
