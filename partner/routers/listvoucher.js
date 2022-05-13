const { Router } = require('express');
var express = require('express');
var router = express.Router();
var listVoucherController = require('../controller/ListVoucherController')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/',authMiddleware.index, listVoucherController.index);

// router.get('/', homeController.index);

module.exports = router;