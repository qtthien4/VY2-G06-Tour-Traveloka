const { Router } = require('express');
var express = require('express');
var router = express.Router();
var tableController = require('../controller/TableController')

router.get('/', tableController.index);


module.exports = router;