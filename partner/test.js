const axios = require('axios').default;

axios.get('http://95.111.203.185:3003/api/tour')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })