const { default: axiosClient } = require("../axiosClient");

const searchApi = {
  postTextSearch: (params) => {
    const url = `/test`;
    return axiosClient.post(url, {
      params,
    });
  },
  //   get: (id) => {
  //     const url = `/country/${id}`;
  //     return axiosClient.get(url);
  //   },
};

export default searchApi;
