const Int = require('tedious/lib/data-types/int');
const { Parser } = require('tedious/lib/token/token-stream-parser');
var { activity, schedule, book, user, type, partner } = require('../configDb');
var GetDb = require('../services/getDb')

class StatisticController {
    async index(req, res) {
        var userPartner = req.signedCookies.Cookie_User
        var arrActivity = await GetDb.fullactivity(userPartner)
        // res.send(arrActivity)
        res.render('statistic', { activity: arrActivity, user: userPartner });
    }

    async StatisticDetail(req, res) {
        var user = req.signedCookies.Cookie_User
        var id = req.params.id;
        var arrBoking = await GetDb.fullBookngOneActivity(id)
        //format tien 
        for (var i = 0; i < arrBoking.length; i++) {
            var totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(arrBoking[i].Reduce)
            arrBoking[i].Reduce = totalBooking
        }
        res.render('statistcdetail', { booking: arrBoking, id: id, user: user });
        // res.send(arrBoking)

    }

    async SearchActivity(req, res) {
        var searchKey = req.body.search;
        var userPartner = req.signedCookies.Cookie_User
        var arrActivity = await GetDb.fullactivity(userPartner)

        for (var i = 0; i < arrActivity.length;) {
            if (!arrActivity[i].ActivityName.includes(searchKey)) {
                arrActivity.splice(i, 1);
            } else {
                i++
            }
        }
        res.render('statistic', { activity: arrActivity, user: userPartner });
    }

    async Seach(req, res) {
        var user = req.signedCookies.Cookie_User
        var id = req.params.id;

        //phan search
        if (req.body.search != undefined) {
            var searchKey = req.body.search;
            var arrBoking = await GetDb.fullBookngOneActivity(id)

            for (var i = 0; i < arrBoking.length;) {
                if (!arrBoking[i].User.includes(searchKey)) {
                    arrBoking.splice(i, 1);
                } else {
                    //format tien
                    var totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(arrBoking[i].Reduce)
                    arrBoking[i].Reduce = totalBooking
                    i++
                }
            }
            res.render('statistcdetail', { booking: arrBoking, user: user });
        }
        else { //phan ngay thang
            var searchthangnam = req.body.thang + "-" + req.body.nam
            console.log(searchthangnam)
            var arrBoking = await GetDb.fullBookngOneActivity(id)


            for (var i = 0; i < arrBoking.length;) {
                if (!arrBoking[i].BookingTime.includes(searchthangnam)) {
                    arrBoking.splice(i, 1);
                }
                else {
                    i++
                }
            }

            //format tien
            for (var i = 0; i < arrBoking.length; i++) {
                var totalBooking = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(arrBoking[i].Reduce)
                arrBoking[i].Reduce = totalBooking
            }

            res.render('statistcdetail', { booking: arrBoking, user: user });
        }
    }

    //bieu do
    async PostChart(req, res) {

        var id = req.params.id;
        var arrBoking = await GetDb.fullBookngOneActivity(id)
        var nam = req.body.nam;
        var trangthai = req.body.trangthai;
        var date = [], data = []
        // 
        // console.log(trangthai);
        for (var i = 1; i <= 12; i++) {
            date = [...date, `${i}-${nam}`]
        }

        if (trangthai == 'success' || trangthai == 'refund') {
            for (var i = 0; i < date.length; i++) {
                var sum = 0;
                for (var j = 0; j < arrBoking.length; j++) {
                    if (arrBoking[j].BookingTime.includes(date[i]) && arrBoking[j].SttBooking == trangthai) {
                        if (arrBoking[j].Total != undefined) {
                            var total = Number(arrBoking[j].Total)
                            sum = sum + total
                        } else {
                            console.log('asdasd')
                        }
                    }

                }
                data.push(sum)
            }
        }
        else if (trangthai == 'nguoithanhcong') {
            for (var i = 0; i < date.length; i++) {
                var sum = 0;
                for (var j = 0; j < arrBoking.length; j++) {
                    if (arrBoking[j].BookingTime.includes(date[i]) && arrBoking[j].SttBooking == "success") {
                        sum = sum + arrBoking[j].AmountPeople
                    }
                }
                data.push(sum)
            }
        } else {
            for (var i = 0; i < date.length; i++) {
                var sum = 0;
                for (var j = 0; j < arrBoking.length; j++) {
                    if (arrBoking[j].BookingTime.includes(date[i]) && arrBoking[j].SttBooking == "refund") {
                        sum = sum + arrBoking[j].AmountPeople
                    }
                }
                data.push(sum)
            }
        }

        res.send(data)
    }

    async Chart(req, res) {
        var user = req.signedCookies.Cookie_User
        var id = req.params.id;
        var arrBoking = await GetDb.fullBookngOneActivity(id)
        res.render('statisticChart', { id: id, book: arrBoking, user: user })
    }
}

module.exports = new StatisticController