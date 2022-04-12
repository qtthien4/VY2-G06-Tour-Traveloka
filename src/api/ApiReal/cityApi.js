const { default: axiosClient } = require("../axiosClient");

const cityApi = {
  getAll: () => {
    const url = "/city";
    return axiosClient.get(url);
  },
  // get: (id)=>{
  //     const url = `/citys/${id}`;
  //     return axiosClient.get(url)
  // }
};

export default cityApi;
