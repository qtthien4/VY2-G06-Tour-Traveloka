const { Router } = require('express');
var express = require('express');
var router = express.Router();
var detailActivityController = require('../controller/DetailActivityController')

router.get('/', detailActivityController.index);
router.post('/', detailActivityController.postTime);


module.exports = router;