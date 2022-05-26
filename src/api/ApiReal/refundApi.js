const { default: axios } = require("axios");

const refundApi = {
  post: (data) => {
    const url = "/booking/refund";
    return axios.post(url, data);
  },
};
export default refundApi;
