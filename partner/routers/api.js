const { Router } = require("express");
var express = require("express");
var router = express.Router();
var apiController = require("../controller/ApiController");
var authMiddleware = require("../middlewares/auth.middleware");

router.get("/", apiController.index);
router.get("/tour", apiController.tour);
router.get("/tour/:slug", apiController.show);

router.get("/city", authMiddleware.index, apiController.city);
router.get("/country", authMiddleware.index, apiController.country);

router.post("/test", authMiddleware.index, apiController.getkeysearch);

router.post("/schedule", apiController.schedule);
router.post("/booking", apiController.booking);

module.exports = router;
