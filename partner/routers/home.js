const { Router } = require('express');
var express = require('express');
var router = express.Router();
var homeController = require('../controller/HomeController')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/',authMiddleware.index, homeController.index);

module.exports = router;