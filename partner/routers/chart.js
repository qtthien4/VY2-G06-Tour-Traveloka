const { Router } = require('express');
var express = require('express');
var router = express.Router();
var chartController = require('../controller/ChartController')

router.get('/', chartController.index);

module.exports = router;