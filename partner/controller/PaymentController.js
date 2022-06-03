require('dotenv').config();
const axios = require('axios');
var { book, schedule, user } = require('../configDb');

class PaymentController {

    index(req, res) {

    }

    //hoan tien (post)
    async refundPayment(req, res) {

    }
}

module.exports = new PaymentController