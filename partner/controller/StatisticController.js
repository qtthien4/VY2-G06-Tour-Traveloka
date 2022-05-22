const raw = require('body-parser/lib/types/raw');
var {activity, schedule, book, user, type, partner} = require('../configDb');
var GetDb = require('../service/getDb')

class StatisticController{
    async index(req, res) {
        var userPartner = req.signedCookies.Cookie_User
        var arrActivity = await GetDb.fullactivity(userPartner)

        res.render('statistic', {activity : arrActivity });
    }

    async StatisticDetail(req,res){
        var id = req.params.id;
        var arrBoking = await GetDb.fullBookngOneActivity(id)
        
        res.render('statistcdetail', {booking: arrBoking});
        // res.send(arrBoking)        

    }

    async Seach(req,res){
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
            // res.send(arrBoking)
            res.render('statistcdetail', {booking: arrBoking});
        }
        else{
            var searchthangnam = req.body.nam + "-"+ req.body.thang
            
            var arrBoking = await GetDb.fullBookngOneActivity(id)
            
            for(var i = 0; i < arrBoking.length; i++){
                if(!arrBoking[i].BookingTime.includes(searchthangnam)){
                    arrBoking.splice(i, 1);
                }
            }
        //    console.log(arrBoking[1].BookingTime.includes(searchthangnam)); 
            res.render('statistcdetail', {booking: arrBoking});
        }
    
        // var count = 1
        // for(var i = 0; i<arrBoking.length; i++){

        //     if(arrBoking[i].BookingTime = ""){
        //         count++
        //     }
        //     if(count == arrBoking.length){
        //         arrBoking = []
        //     }
        // }

    //     

    }
}

module.exports = new StatisticController