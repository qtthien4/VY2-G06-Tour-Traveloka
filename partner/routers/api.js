const { Router } = require("express");
var express = require("express");
var router = express.Router();
var apiController = require("../controller/ApiController");
var authMiddleware = require("../middlewares/auth.middleware");

router.post("/registeruser", apiController.RegisterUser);

router.get("/", apiController.index);
router.get("/tour", apiController.tour);

router.get("/image", apiController.image);
router.get("/image/:id", apiController.imageId);

// router.get("/schedule", apiController.schedule);
router.get("/schedule/:id", apiController.scheduleID);

router.get("/tour/:slug", apiController.show);
router.get("/city", apiController.city);
router.get("/country", apiController.country);
router.get("/keysearch", apiController.keysearch);
router.get("/favaurite", apiController.getFavourite);

router.post("/favaurite", apiController.favourite);
router.post("/favaurite/:id", apiController.deleteFavourite);
router.post("/test", apiController.getkeysearch);
router.post("/booking", apiController.booking);
router.post("/endbooking", apiController.endbooking);

module.exports = router;
