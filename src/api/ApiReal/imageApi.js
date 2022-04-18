const { default: axiosClient } = require("../axiosClient");

const imageApi = {
  getAll: () => {
    const url = "/image";
    return axiosClient.get(url);
  },
  getId: (id) => {
    const url = `/image/${id}`;
    return axiosClient.get(url);
  },
};

export default imageApi;
