const { Router } = require('express');
var express = require('express');
var router = express.Router();
var formController = require('../controller/FormController')

router.get('/', formController.index);
router.post('/a', formController.testpost);

module.exports = router;