const { default: axiosExternalVouchers } = require("./axiosExternalVouchers");

const VouchersApi = {
  getAllListVoucher: () => {
    const urlListVoucher = `/voucher/eligible?typeVoucher=XPERIENCE`;
    return axiosExternalVouchers.get(urlListVoucher);
  },
  getAllListGift: () => {
    const urlListGift = `/gift-card/eligible?typeVoucher=XPERIENCE`;
    return axiosExternalVouchers.get(urlListGift);
  },
  checkConditionVoucher: (paramsCheckConditionVoucher) => {
    const urlCheckCondition = `/voucher/check-condition`;
    return axiosExternalVouchers.get(urlCheckCondition, {
      params: paramsCheckConditionVoucher,
    });
  },
  
  checkConditionGift: (paramsCheckConditionVoucher) => {
    const urlCheckCondition = `/gift-card/check-condition`;
    return axiosExternalVouchers.get(urlCheckCondition, {
      params: paramsCheckConditionVoucher,
    });
  },
  preOrder: (data) => {
    const urlPreVoucher = `/voucher/pre-order`;
    return axiosExternalVouchers.post(urlPreVoucher, data);
  },
};

export default VouchersApi;
