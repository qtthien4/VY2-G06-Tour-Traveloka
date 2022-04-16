const { Router } = require('express');
var express = require('express');
var router = express.Router();
var signUpController = require('../controller/signUpController')

router.get('/', signUpController.index);
router.post('/', signUpController.postsignup)

module.exports = router;