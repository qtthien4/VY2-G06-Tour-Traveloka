const { default: axiosClient } = require("../axiosClient");

const scheduleApi = {
  getAll: () => {
    const url = "/schedule";
    return axiosClient.get(url);
  },
  getId: (id) => {
    const url = `/schedule/${id}`;
    return axiosClient.get(url);
  },
};

export default scheduleApi;
