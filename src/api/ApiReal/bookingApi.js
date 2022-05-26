const { default: axiosClient } = require("../axiosClient");

const bookingApi = {
  post: (data) => {
    const url = `/booking`;
    return axiosClient.post(url, data);
  },
  get: (id) => {
    const url = `/booking`;
    return axiosClient.get(url);
  },
};

export default bookingApi;
