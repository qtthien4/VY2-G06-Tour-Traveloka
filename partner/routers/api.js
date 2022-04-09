const { Router } = require('express');
var express = require('express');
var router = express.Router();
var apiController = require('../controller/ApiController')

router.get('/', apiController.index);


module.exports = router;