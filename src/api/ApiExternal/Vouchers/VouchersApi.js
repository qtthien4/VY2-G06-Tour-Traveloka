const { default: axiosExternalVouchers } = require("./axiosExternalVouchers");

const VouchersApi = {
  getAllListVoucher: (headersApi) => {
    const urlListVoucher = `/voucher/eligible?typeVoucher=XPERIENCE`;
    return axiosExternalVouchers.get(urlListVoucher, {
      headers: headersApi,
    });
  },
  getAllListGift: (headersApi) => {
    const urlListGift = `/gift-card/eligible?typeVoucher=XPERIENCE`;
    return axiosExternalVouchers.get(urlListGift, {
      headers: headersApi,
    });
  },
  checkConditionVoucher: ({ paramsCheckConditionVoucher, headersApi }) => {
    const urlCheckCondition = `/voucher/check-condition`;
    return axiosExternalVouchers.get(urlCheckCondition, {
      params: paramsCheckConditionVoucher,
      headers: headersApi,
    });
  },

  checkConditionGift: ({ paramsCheckConditionVoucher, headersApi }) => {
    const urlCheckCondition = `/gift-card/check-condition`;
    return axiosExternalVouchers.get(urlCheckCondition, {
      params: paramsCheckConditionVoucher,
      headers: headersApi,
    });
  },
  preOrder: (data) => {
    const urlPreVoucher = `/voucher/pre-order`;
    return axiosExternalVouchers.post(urlPreVoucher, data);
  },
};

export default VouchersApi;
