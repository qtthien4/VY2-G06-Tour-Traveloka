const { default: axiosClient } = require("../axiosClient");

const keysearchApi = {
  post: (data) => {
    const url = `/keysearch`;
    return axiosClient.post(url, data);
  },
  getAll: (idCustomer) => {
    const url = `/keysearch`;
    return axiosClient.get(url, {
      params: {
        idCustomer,
      },
    });
  },
  delete: (data) => {
    const url = `/keysearch/${data}`;
    return axiosClient.post(url);
  },
};

export default keysearchApi;
