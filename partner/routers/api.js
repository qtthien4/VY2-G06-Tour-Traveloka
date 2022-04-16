const { Router } = require('express');
var express = require('express');
var router = express.Router();
var apiController = require('../controller/ApiController')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/', authMiddleware.index,apiController.index);
router.get("/tour",authMiddleware.index, apiController.tour);
router.get("/tour/:slug",authMiddleware.index, apiController.show);

router.get("/city", authMiddleware.index,apiController.city);
router.get("/country", authMiddleware.index,apiController.country);

router.post("/test",authMiddleware.index, apiController.getkeysearch);

//router.get("/test", apiController.test);


module.exports = router;