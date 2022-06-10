var { activity, schedule, book, user, type, partner, customer } = require('../configDb');
class GetDb {

    async fullactivity(userPartner) {
        // var userpartner = req.signedCookies.Cookie_User;        
        var arrActivity;
        var idpartner = {}
        await partner.findOne({ raw: true, where: { UserPartner: userPartner } }).then(e => idpartner = e)

        await activity.findAll({ raw: true, where: { Idpartner: idpartner.Idpartner } }).then(e => arrActivity = e);

        for (var i = 0; i < arrActivity.length; i++) {
            var arrSchedule = [], arrBooking = [], handleArrBooking = [], totalBooking = 0, typeActivity
            //tim tat ca lich trinh của acitivity này
            await schedule.findAll({ raw: true, where: { IdActivity: arrActivity[i].IdActivity } }).then(e => arrSchedule = e)
            arrActivity[i].schedule = arrSchedule;

            //tim tat ca bôking cua activity này
            for (var j = 0; j < arrActivity[i].schedule.length; j++) {
                await book.findAll({ raw: true, where: { IdSchedule: arrActivity[i].schedule[j].IdSchedule } }).then(e => handleArrBooking = [...handleArrBooking, ...e])
            }
            arrActivity[i].booking = handleArrBooking;

            //tinh tong tien thu duoc
            for (var k = 0; k < arrActivity[i].booking.length; k++) {
                if (arrActivity[i].booking[k].SttBooking == 'success') {
                    totalBooking = totalBooking + parseInt(arrActivity[i].booking[k].Reduce)
                }

            }
            totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalBooking)
            arrActivity[i].totalBooking = totalBooking;

            //tim loại tour
            await type.findOne({ raw: true, where: { idtype: arrActivity[i].idtype }, order: ['idtype'] }).then(e => typeActivity = e)
            arrActivity[i].type = typeActivity.type;

            //count
            arrActivity[i].count = i + 1;
        }
        return arrActivity;
    }

    async fullBookngOneActivity(IdActivity) {
        var arrActivity;
        var arrSchedule = [], arrBooking = [], handleArrBooking = [], totalBooking = 0
        var customerObj

        await activity.findAll({ raw: true, where: { IdActivity: IdActivity } }).then(e => arrActivity = e);
        //get booking
        for (var i = 0; i < arrActivity.length; i++) {
            var arrSchedule = [], arrBooking = [], handleArrBooking, totalBooking = 0
            await schedule.findAll({ raw: true, where: { IdActivity: arrActivity[i].IdActivity } }).then(e => arrSchedule = e)
            arrActivity[i].schedule = arrSchedule;
            for (var j = 0; j < arrActivity[i].schedule.length; j++) {
                await book.findAll({ raw: true, where: { IdSchedule: arrActivity[i].schedule[j].IdSchedule } }).then(e => handleArrBooking = [...handleArrBooking, ...e])
            }
            arrActivity[i].booking = handleArrBooking;
            for (var k = 0; k < arrActivity[i].booking.length; k++) {
                totalBooking = totalBooking + parseInt(arrActivity[i].booking[k].Total)
            }
        }

        //get userbooking
        for (var i = 0; i < handleArrBooking.length; i++) {
            customerObj = await customer.findOne({ raw: true, where: { IdBooking: handleArrBooking[i].IdBooking }, order: ['IdBooking'] })

            handleArrBooking[i].User = customerObj.CustomerName
            handleArrBooking[i].count = i + 1



            if (handleArrBooking[i].IdVoucher != "                    ") {
                handleArrBooking[i].Voucher = "Có"
            } else {
                handleArrBooking[i].Voucher = "Không"
            }
            if (handleArrBooking[i].IdGift != "                    ") {
                handleArrBooking[i].gift = "Có"
            } else {
                handleArrBooking[i].gift = "Không"
            }

            //format gia tien
            // var totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format( handleArrBooking[i].Total)
            // handleArrBooking[i].Total = totalBooking
        }
        return handleArrBooking;
    }
}

module.exports = new GetDb()



