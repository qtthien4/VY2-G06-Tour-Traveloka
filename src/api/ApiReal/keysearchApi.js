const { default: axiosClient } = require("../axiosClient");

const keysearchApi = {
  post: (data) => {
    const url = `/keysearch`;
    return axiosClient.post(url, data);
  },
  getAll: () => {
    const url = `/keysearch`;
    return axiosClient.get(url);
  },
  delete: (data) => {
    const url = `/keysearch/${data}`;
    return axiosClient.post(url);
  },
};

export default keysearchApi;
