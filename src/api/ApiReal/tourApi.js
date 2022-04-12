const { default: axiosClient } = require("../axiosClient");

const tourApi = {
  getAll: () => {
    const url = "/tour";
    return axiosClient.get(url);
  },
  getId: (id) => {
    const url = `/tour/${id}`;
    return axiosClient.get(url);
  },
};

export default tourApi;
