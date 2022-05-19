const raw = require('body-parser/lib/types/raw');
var {activity, schedule, book, user, type, partner} = require('../configDb');

class StatisticController{
    async index(req, res) {
        var userpartner = req.signedCookies.Cookie_User;        
        var arrActivity;
        var idpartner ={}
        await partner.findOne({raw:true, where: {UserPartner: userpartner}}).then(e => idpartner = e)

        await activity.findAll({raw: true, where: {Idpartner : idpartner.Idpartner}}).then(e => arrActivity = e);
        
        for(var i = 0; i < arrActivity.length; i++){
            var arrSchedule = [], arrBooking = [], handleArrBooking, totalBooking =0 , typeActivity
            //tim tat ca lich trinh của acitivity này
            await schedule.findAll({raw: true, where: {IdActivity:arrActivity[i].IdActivity}}).then(e => arrSchedule = e)
            arrActivity[i].schedule = arrSchedule;

            //tim tat ca bôking cua activity này
            for(var j = 0; j <  arrActivity[i].schedule.length; j++){
                await book.findAll({raw: true, where: {IdSchedule: arrActivity[i].schedule[j].IdSchedule}}).then(e => handleArrBooking = arrBooking.concat(e))                
            }
            arrActivity[i].booking = handleArrBooking;

            //tinh tong tien thu duoc
            for(var k = 0; k < arrActivity[i].booking.length; k++ ){
                totalBooking = totalBooking + parseInt(arrActivity[i].booking[k].Total)
            }
            totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalBooking)
            arrActivity[i].totalBooking = totalBooking;

            //tim loại tour
            await type.findOne({raw:true, where:{ idtype : arrActivity[i].idtype}, order: ['idtype']}).then(e => typeActivity = e)
            arrActivity[i].type = typeActivity.type;
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
            user.findOne({raw: true, where: {IdCustomer : handleArrBooking[i].IdCustomer}, order: ['IdCustomer']}).then(e => arrUser = e);
            handleArrBooking[i].User = arrUser.Name
            handleArrBooking[i].count = i+1
            if( handleArrBooking[i].IdVoucher = ''){
                handleArrBooking[i].Voucher = "Không"
            }else{
                handleArrBooking[i].Voucher = "Có"
            }
        }
        // res.send(handleArrBooking)

        var thang = 5, nam = 2022;

        res.render('statistcdetail', {booking: handleArrBooking});

        

    }

    Seach(req,res){
        console.log(req.body)
    }
}

module.exports = new StatisticController