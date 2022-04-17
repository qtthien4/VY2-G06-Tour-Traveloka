const { Router } = require('express');
var express = require('express');
var router = express.Router();
var tableController = require('../controller/TableController')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/',authMiddleware.index, tableController.index);


module.exports = router;