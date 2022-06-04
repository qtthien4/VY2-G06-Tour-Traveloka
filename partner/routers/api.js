const { Router } = require("express");
var express = require("express");
var router = express.Router();
var apiController = require("../controller/ApiController");
var authMiddleware = require("../middlewares/auth.middleware");


router.get("/", apiController.index);
router.get("/tour", apiController.tour);
router.get("/image", apiController.image);
router.get("/image/:id", apiController.imageId);
router.get("/schedule/:id", apiController.scheduleID);
router.get("/tour/:slug", apiController.show);
router.get("/city", apiController.city);
router.get("/country", apiController.country);
router.get("/keysearch", apiController.keysearch);
router.get("/favaurite", apiController.getFavourite);
router.get("/booking/:id", apiController.bookingId);
//update và get reservation
router.get("/getreservation", apiController.GetReservation);
router.post("/reservation", apiController.Reservation);

router.post("/registeruser", apiController.RegisterUser);
router.post("/favaurite", apiController.favourite);
router.post("/favaurite/:id", apiController.deleteFavourite);
router.post("/test", apiController.getkeysearch);
router.post("/booking", apiController.booking);
router.post("/booking/refund", apiController.refundBooking);

router.post("/endbooking", apiController.endbooking);
router.post("/login", apiController.Login);
router.post("/userbooking", apiController.UserBooking);
router.post("/payment", apiController.payment);

module.exports = router;
