const { Router } = require('express');
var express = require('express');
var router = express.Router();
var paymentController = require('../controller/PaymentController')


router.post('/',paymentController.index);

module.exports = router;