const { Router } = require('express');
var express = require('express');
var router = express.Router();
var chartController = require('../controller/ChartController')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/',authMiddleware.index, authMiddleware.index,chartController.index);

module.exports = router;