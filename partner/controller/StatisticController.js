const Int = require('tedious/lib/data-types/int');
const { Parser } = require('tedious/lib/token/token-stream-parser');
var {activity, schedule, book, user, type, partner} = require('../configDb');
var GetDb = require('../service/getDb')

class StatisticController{    
    async index(req, res) {
        var user = req.signedCookies.Cookie_User
        var userPartner = req.signedCookies.Cookie_User
        var arrActivity = await GetDb.fullactivity(userPartner)
        // res.send(arrActivity)
        res.render('statistic', {activity : arrActivity,user:user });
    }

    async StatisticDetail(req,res){
        var user = req.signedCookies.Cookie_User
        var id = req.params.id;
        var arrBoking = await GetDb.fullBookngOneActivity(id)
        //format tien 
        for(var i = 0; i < arrBoking.length; i++){
            var totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(arrBoking[i].Total)
            arrBoking[i].Total = totalBooking
        }        
        res.render('statistcdetail', {booking: arrBoking, id: id,user:user});
        // res.send(arrBoking)        

    }

    async Seach(req,res){
        var user = req.signedCookies.Cookie_User
        var id = req.params.id;
        console.log(req.body)
        if(req.body.search != undefined){
            var searchKey = req.body.search;
            var arrBoking = await GetDb.fullBookngOneActivity(id)
            var count = 0
            for(var i = 0; i < arrBoking.length; i++){
                if(!arrBoking[i].User.includes(searchKey)){
                    count++
                }
            }
            if(count == arrBoking.length){
                arrBoking = []
            }else{
                for(var i = 0; i < arrBoking.length; i++){
                    if(!arrBoking[i].User.includes(searchKey)){
                        arrBoking.splice(i, 1);
                    }
                }
            }            
            res.render('statistcdetail', {booking: arrBoking, user:user});
        }
        else{
            var searchthangnam = req.body.nam + "-"+ req.body.thang
            
            var arrBoking = await GetDb.fullBookngOneActivity(id)
            
            for(var i = 0; i < arrBoking.length; i++){
                if(!arrBoking[i].BookingTime.includes(searchthangnam)){
                    arrBoking.splice(i, 1);
                }
            }       
            res.render('statistcdetail', {booking: arrBoking, user:user});
        }    
    }

    async PostChart(req,res){
        
        var id = req.params.id;
        var arrBoking = await GetDb.fullBookngOneActivity(id)
        var nam = req.body.nam;
        var date = [], data = []

        for(var i = 1; i<=12; i++){
            date = [...date, `${i}-${nam}`]
        }
        
        for(var i = 0; i< date.length; i++){
            var sum = 0;
            for(var j  =0; j < arrBoking.length; j++){
                if(arrBoking[j].BookingTime.includes(date[i])){
                    if(arrBoking[j].Total != undefined){
                        var total = Number(arrBoking[j].Total)
                        sum = sum + total
                    }else{
                        console.log('asdasd')
                    }
                }
            }
            data.push(sum)
        }
        res.send(data)
    }

    async Chart(req,res){
        var user = req.signedCookies.Cookie_User
        var id = req.params.id;
        var arrBoking = await GetDb.fullBookngOneActivity(id)        
        res.render('statisticChart', { id : id ,book: arrBoking, user:user})
    }
}

module.exports = new StatisticController