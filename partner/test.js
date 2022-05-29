const axios = require('axios');

// axios("https://api-m.sandbox.paypal.com/v2/payments/captures/3HB493205W812352J/refund", {
//     method: "post",
//     headers: {
//         "Content-Type" : "application/json"
//     },
//     auth: {
//         username: 'ATINp8X4ScCQh55X9CZMRprGro2kG0wzUTp_NyqOL4d2-lw6RISvj-PdOOcBUIediRqoI1xqvrg7tGhH',
//         password: 'EL1zQPQt5MwU6KE2l0ljJFeC-kQ5kKZMc5w-kqFn1vr1f6mabbaw-hZq9u5h4BHxzSgPCGTkNrYAL04u'
//     }
// })
axios("https://localhost:3003/payment/refund", {
    method: "post",
    data: {
        a: "asd"
    }
})
