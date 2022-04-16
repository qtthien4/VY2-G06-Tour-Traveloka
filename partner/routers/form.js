const { Router } = require('express');
var express = require('express');
var router = express.Router();
var formController = require('../controller/FormController')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/',authMiddleware.index, formController.index);
router.post('/',authMiddleware.index, formController.testpost);

module.exports = router;