const sql = require('mssql/msnodesqlv8')

const {activity, favourite, schedule, image, partner} = require("../configDb")
class TableController {
    async index(req, res) {
        var stt = req.query.stt;
        var userPartner = req.signedCookies.Cookie_User;
        var idpartner = {}
        await partner.findOne({raw:true, where: {UserPartner: userPartner}}).then(e => idpartner = e)
        if (stt == undefined) {
             await activity.findAll({raw: true, where : {Idpartner: idpartner.Idpartner}}).then(arrActivity => {
                res.render('tables', { activity: arrActivity , user: userPartner}) })
        }
        if (stt != undefined) {
            var activityObj = await activity.findOne({raw:true, where: {IdActivity : stt}, order: ['IdActivity']})


            if(activityObj.Stt == true){
                await activity.update({Stt: 0}, {where: {IdActivity : stt }})
                await activity.findAll({raw: true, where : {Idpartner: idpartner.Idpartner}}).then(arrActivity => res.render('tables', { activity: arrActivity , user: userPartner}))
            }else{
                await activity.update({Stt: 1}, {where: {IdActivity : stt }})
                await activity.findAll({raw: true, where : {Idpartner: idpartner.Idpartner}}).then(arrActivity => res.render('tables', { activity: arrActivity, user: userPartner }))
            }
        }
    }
}

module.exports = new TableController;