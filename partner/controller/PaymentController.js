require('dotenv').config();
const axios = require('axios');
var { book, schedule, user } = require('../configDb');

class PaymentController {

    index(req, res) {
    }

    //hoan tien (post)
    async refundPayment(req, res) {
        var idbooking = req.body.idbooking;

        const bookObj = await book.findOne({ raw: true, where: { IdBooking: idbooking } })
        if (bookObj != null) {
            var idPayment = bookObj.IdPayment;

            const refund = await axios(`https://api-m.sandbox.paypal.com/v2/payments/captures/${idPayment}/refund`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                auth: {
                    username: process.env.PUCLIC_KEY_PAYPAL,
                    password: process.env.SERECT_KEY_PAYPAL
                }
            })
            res.send(refund.data)
        }
    }
}

module.exports = new PaymentController