const { Router } = require('express');
var express = require('express');
var router = express.Router();
var signUpController = require('../controller/signUpController')

router.get('/', signUpController.index);

module.exports = router;