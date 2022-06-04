import axiosClient from "api/axiosClient";

const reservationApi = {
  post: (data) => {
    const url = "/reservation";
    return axiosClient.post(url, data);
  },
};
export default reservationApi;
