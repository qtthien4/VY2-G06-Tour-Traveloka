const { Router } = require('express');
var express = require('express');
var router = express.Router();
var loginController = require('../controller/LoginCotroller')

router.get('/', loginController.index);

module.exports = router;