var {activity, schedule} = require('../configDb');

class StatisticController{
    async index(req, res) {
        var userpartner = req.signedCookies.Cookie_User;        
        var arrActivity;
        
        await activity.findAll({raw: true, where: {UserPartner : userpartner}}).then(e => arrActivity = e);
        
        for(var i = 0; i < arrActivity.length; i++){
            var arrSchedule = []
            await schedule.findAll({raw: true, where: {IdActivity:arrActivity[i].IdActivity}}).then(e => arrSchedule = e)
            arrActivity[i].schedule = arrSchedule;
        }
        res.send(arrActivity)
        // res.render('statistic', {activity : arrActivity });
    }
}

module.exports = new StatisticController