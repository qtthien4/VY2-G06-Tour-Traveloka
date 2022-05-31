const { default: axiosClient } = require("../axiosClient");

const bookingApi = {
  post: (data) => {
    const url = `/booking`;
    return axiosClient.post(url, data);
  },
  get: (id) => {
    const url = `/booking/${id}`;
    return axiosClient.get(url);
  },

  postBooking: (data) => {
    const url = `/payment`;
    return axiosClient.post(url, data);
  },
};

export default bookingApi;
