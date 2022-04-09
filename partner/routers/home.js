const { Router } = require('express');
var express = require('express');
var router = express.Router();
var homeController = require('../controller/HomeController')

router.get('/', homeController.index);

module.exports = router;