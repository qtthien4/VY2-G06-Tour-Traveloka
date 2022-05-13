const { Router } = require('express');
var express = require('express');
var router = express.Router();
var listGiftController = require('../controller/ListGiftController')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/',authMiddleware.index, listGiftController.index);

// router.get('/', homeController.index);

module.exports = router;