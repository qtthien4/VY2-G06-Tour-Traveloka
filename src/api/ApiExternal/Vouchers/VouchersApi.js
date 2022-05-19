const { default: axiosExternalVouchers } = require("./axiosExternalVouchers");

const VouchersApi = {
  getAllList: () => {
    const urlListVoucher = `/eligible?typeVoucher=tour`;
    return axiosExternalVouchers.get(urlListVoucher);
  },
  checkCondition: (paramsCheckConditionVoucher) => {
    const urlCheckCondition = `/check-condition`;
    return axiosExternalVouchers.get(urlCheckCondition, {
      params: paramsCheckConditionVoucher,
    });
  },
  preOrder: (data) => {
    const urlListVoucher = `/pre-order`;
    return axiosExternalVouchers.post(urlListVoucher, data);
  },
};

export default VouchersApi;
