const { Router } = require('express');
var express = require('express');
var router = express.Router();
var apiController = require('../controller/ApiController')

router.get('/', apiController.index);
router.get("/tour", apiController.tour);
router.get("/tour/:slug", apiController.show);

router.get("/city", apiController.city);
router.get("/country", apiController.country);

router.post("/test", apiController.getkeysearch);

router.get("/test", apiController.test);


module.exports = router;