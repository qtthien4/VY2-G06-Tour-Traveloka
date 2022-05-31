const { Router } = require('express');
var express = require('express');
var router = express.Router();
var statisticController = require('../controller/StatisticController')

router.get('/',statisticController.index);
router.get('/Detail/Chart/:id',statisticController.Chart);
router.post('/Detail/Chart/:id',statisticController.PostChart);
router.get('/Detail/:id',statisticController.StatisticDetail);
router.post('/Detail/:id',statisticController.Seach);

module.exports = router;