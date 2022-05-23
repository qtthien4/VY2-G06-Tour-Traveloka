const { default: axiosClient } = require("../axiosClient");

const reBookingApi = {
  post: (data) => {
    const url = `/endbooking `;
    return axiosClient.post(url, data);
  },
  //   get: (id) => {
  //     const url = `/country/${id}`;
  //     return axiosClient.get(url);
  //   },
};

export default reBookingApi;
