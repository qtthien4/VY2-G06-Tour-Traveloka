const { default: axiosClient } = require("api/axiosClient");

const transactionApi = {
  post: (data) => {
    const url = "/userbooking";
    return axiosClient.post(url, data);
  },
};

export default transactionApi;
