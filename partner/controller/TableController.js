const sql = require('mssql/msnodesqlv8')

const {activity, favourite, schedule, image, partner} = require("../configDb")
class TableController {
    async index(req, res) {
        var stt = req.query.stt;
        var del = req.query.del;
        var userPartner = req.signedCookies.Cookie_User;
        if (del == undefined && stt == undefined) {
            // sql.connect(sqlConfig, function (err) {
            //     if (err) console.log(err);

            //     var re = new sql.Request();
            //     re.query('select * from activity', function (err, result) {
            //         if (err) console.log(err)
            //         var activity = result.recordset                    
            //         res.render('tables', { activity: activity })
            //     })
            // })
            var idpartner = {}
            await partner.findOne({raw:true, where: {UserPartner: userPartner}}).then(e => idpartner = e)
             await activity.findAll({raw: true, where : {Idpartner: idpartner.Idpartner}}).then(arrActivity => {
                res.render('tables', { activity: arrActivity , user: userPartner}) })
        }
        if (stt != undefined && del == undefined) {
            activity.findOne({raw:true, where: {IdActivity : stt}, order: ['IdActivity']})
            .then(status => {
                if(status.Stt == true){
                    activity.update({Stt: 0}, {where: {IdActivity : stt }})
                    activity.findAll({raw: true}).then(arrActivity => res.render('tables', { activity: arrActivity , user: userPartner}))
                }else{
                    activity.update({Stt: 1}, {where: {IdActivity : stt }})
                    activity.findAll({raw: true}).then(arrActivity => res.render('tables', { activity: arrActivity, user: userPartner }))
                }
            })
            

        }
        if (del != undefined && stt == undefined) {            
            await favourite.destroy({where:{IdActivity: del}})
            await schedule.destroy({where:{IdActivity: del}})
            await image.destroy({where:{IdActivity: del}})
            await activity.destroy({where:{IdActivity: del}})
            activity.findAll({raw: true}).then(arrActivity => res.render('tables', { activity: arrActivity, user :userPartner }))
        }

    }
}

module.exports = new TableController;