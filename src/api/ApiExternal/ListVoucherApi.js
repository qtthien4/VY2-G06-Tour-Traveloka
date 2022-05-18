import axios from "axios";

const { default: axiosClient } = require("../axiosClient");

const ListVoucherApi = {
  getAllListVoucher:  () => {
    const url = `http://128.199.241.206:8080/api/v1/user/voucher/eligible?typeVoucher=tour`;

    const response = axios(
      "http://128.199.241.206:8080/api/v1/user/voucher/eligible?typeVoucher=tour",
      {
        method: "GET",
        headers: {
          user_id: "12333333",
          partner_id: "a67f1f4e-946a-483b-9993-ca5c344da8f5",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res);
    return response;
  },
  //   get: (id) => {
  //     const url = `/country/${id}`;
  //     return axiosClient.get(url);
  //   },
};

export default ListVoucherApi;
