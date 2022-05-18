const { Router } = require('express');
var express = require('express');
var router = express.Router();
var statisticController = require('../controller/StatisticController')

router.get('/',statisticController.index);

module.exports = router;