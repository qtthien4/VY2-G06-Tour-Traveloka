var {activity, schedule, book, user} = require('../configDb');

class StatisticController{
    async index(req, res) {
        var userpartner = req.signedCookies.Cookie_User;        
        var arrActivity;
        
        await activity.findAll({raw: true, where: {UserPartner : userpartner}}).then(e => arrActivity = e);
        
        for(var i = 0; i < arrActivity.length; i++){
            var arrSchedule = [], arrBooking = [], handleArrBooking, totalBooking =0 
            await schedule.findAll({raw: true, where: {IdActivity:arrActivity[i].IdActivity}}).then(e => arrSchedule = e)
            arrActivity[i].schedule = arrSchedule;
            for(var j = 0; j <  arrActivity[i].schedule.length; j++){
                await book.findAll({raw: true, where: {IdSchedule: arrActivity[i].schedule[j].IdSchedule}}).then(e => handleArrBooking = arrBooking.concat(e))                
            }
            arrActivity[i].booking = handleArrBooking;
            for(var k = 0; k < arrActivity[i].booking.length; k++ ){
                totalBooking = totalBooking + parseInt(arrActivity[i].booking[k].Total)
            }
            totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalBooking)
            arrActivity[i].totalBooking = totalBooking;
        }
        // res.send(arrActivity)
        res.render('statistic', {activity : arrActivity });
    }

    async StatisticDetail(req,res){
        var id = req.params.id;
        var arrActivity;
        var arrSchedule = [], arrBooking = [], handleArrBooking, totalBooking =0 

        await activity.findAll({raw: true, where: {IdActivity : id}}).then(e => arrActivity = e);
        //get booking
        for(var i = 0; i < arrActivity.length; i++){
            var arrSchedule = [], arrBooking = [], handleArrBooking, totalBooking =0 
            await schedule.findAll({raw: true, where: {IdActivity:arrActivity[i].IdActivity}}).then(e => arrSchedule = e)
            arrActivity[i].schedule = arrSchedule;
            for(var j = 0; j <  arrActivity[i].schedule.length; j++){
                await book.findAll({raw: true, where: {IdSchedule: arrActivity[i].schedule[j].IdSchedule}}).then(e => handleArrBooking = arrBooking.concat(e))                
            }
            arrActivity[i].booking = handleArrBooking;
            for(var k = 0; k < arrActivity[i].booking.length; k++ ){
                totalBooking = totalBooking + parseInt(arrActivity[i].booking[k].Total)
            }
            totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalBooking)
            arrActivity[i].totalBooking = totalBooking;
        }

        //get userbooking
        for(var i = 0; i < handleArrBooking.length; i++){
            var arrUser =[]
            user.findAll({raw: true, where: {IdCustomer : handleArrBooking[i].IdCustomer}}).then(e => arrUser = e);
            handleArrBooking[i].User = arrUser
        }
        res.send(handleArrBooking)
        // res.render('statistcdetail');

    }
}

module.exports = new StatisticController