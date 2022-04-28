const { default: axiosClient } = require("../axiosClient");

const paymentApi = {
  post: (data) => {
    const url = `/payment`;
    return axiosClient.post(url, data);
  },
  //   get: (id) => {
  //     const url = `/country/${id}`;
  //     return axiosClient.get(url);
  //   },
};

export default paymentApi;
