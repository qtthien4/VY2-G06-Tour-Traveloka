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
    const urlPreVoucher = `/pre-order`;
    return axiosExternalVouchers.post(urlPreVoucher, data);
  },
};

export default VouchersApi;
