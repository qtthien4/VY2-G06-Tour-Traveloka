const { Router } = require('express');
var express = require('express');
var router = express.Router();
var detailActivityController = require('../controller/DetailActivityController')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/',authMiddleware.index, detailActivityController.index);
router.post('/',authMiddleware.index, detailActivityController.postTime);


module.exports = router;