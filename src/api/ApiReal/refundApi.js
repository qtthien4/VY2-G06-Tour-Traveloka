import axiosClient from "api/axiosClient";

const refundApi = {
  post: (data) => {
    const url = "/booking/refund";
    return axiosClient.post(url, data);
  },
};
export default refundApi;
