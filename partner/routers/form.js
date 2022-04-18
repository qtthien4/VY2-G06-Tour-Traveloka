const { Router } = require('express');
var express = require('express');
var router = express.Router();
var formController = require('../controller/FormController')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/', formController.index);
router.post('/', formController.testpost);

module.exports = router;