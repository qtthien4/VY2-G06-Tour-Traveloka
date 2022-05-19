const { header } = require('express/lib/request');

const axios = require('axios').default;

axios({
  method: 'get',
  url: 'http://128.199.241.206:8080/api/v1/user/voucher/check-condition',
  headers: {
    'user_id': '12333333',
    'partner_id': 'a67f1f4e-946a-483b-9993-ca5c344da8f5',
    'Content-Type': 'application/json; charset=utf-8',
  },
  params: {
    'amount':'400000',
  'code':"tourhieudeptrai",
  'typeVoucher':"tour"
  }
}).then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
})