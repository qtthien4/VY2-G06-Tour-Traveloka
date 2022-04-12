const { default: axiosClient } = require("../axiosClient");

const countryApi = {
  getAll: () => {
    const url = "/country";
    return axiosClient.get(url);
  },
  //   get: (id) => {
  //     const url = `/country/${id}`;
  //     return axiosClient.get(url);
  //   },
};

export default countryApi;
