const { default: axiosClient } = require("../axiosClient");

const searchApi = {
  postTextSearch: (textSearch) => {
    const url = `/test?q=${textSearch}`;
    return axiosClient.post(url);
  },
  //   get: (id) => {
  //     const url = `/country/${id}`;
  //     return axiosClient.get(url);
  //   },
};

export default searchApi;
