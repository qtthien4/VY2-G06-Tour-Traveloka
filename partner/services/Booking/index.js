var { book } = require('../../configDb');
const { Op } = require('sequelize');
const ScheduleService = require('../Schedule')

class BookingService {

    constructor(user) {
        this.user = user
    }

    async getAllBookingFromSchudule() {
        const scheduleService = new ScheduleService(this.user)
        const scheduleId = (await scheduleService.getAllSchuduleFormActivityByPartner()).map(items => items.IdSchedule)

        return await book.findAll({
            raw: true,
            where: {
                IdSchedule: {
                    [Op.in]: scheduleId
                }
            }
        })
    }

    async bookingActivitySuccess() {
        const allBooking = await this.getAllBookingFromSchudule();
        for (var i = 0; i < allBooking.length;) {
            if (allBooking[i].SttBooking != 'success') {
                allBooking.splice(i, 1);
            }

            else i++
        }
        return allBooking
    }

    async earningActivity() {
        const allBooking = await this.getAllBookingFromSchudule();
        let sum = 0
        allBooking.map(a => {
            if (a.SttBooking == 'success') {
                sum += Number(a.Reduce)
            }
        }
        );
        var totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sum)
        return totalBooking
    }


}

module.exports = BookingService