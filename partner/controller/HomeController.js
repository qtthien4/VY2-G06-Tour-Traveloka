const PartnerService = require("../services/Partner");
const ActivityService = require("../services/Activity");
const BookingService = require("../services/Booking");

class HomeController {
    async index(req, res) {
        var user = req.signedCookies.Cookie_User
        const activity = new ActivityService(user)
        const allACtivity = await activity.getActivityFromPartner();

        const booking = new BookingService(user)
        const allBooking = await booking.getAllBookingFromSchudule()
        const bookingSuccess = await booking.bookingActivitySuccess()
        const total = await booking.earningActivity()

        // res.send(total)
        // console.log(total);

        res.render('home', { user: user, allACtivity: allACtivity.length, allbooking: allBooking.length, bookingsuccess: bookingSuccess.length, total: total });
    }
}

module.exports = new HomeController