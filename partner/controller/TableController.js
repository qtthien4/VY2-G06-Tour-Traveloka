

const { activity, favourite, schedule, type, partner } = require("../configDb")
class TableController {
    async index(req, res) {
        var stt = req.query.stt;
        var userPartner = req.signedCookies.Cookie_User;
        var idpartner = {}
        await partner.findOne({ raw: true, where: { UserPartner: userPartner } }).then(e => idpartner = e)

        if (stt == undefined) {
            const arrActivity = await activity.findAll({ raw: true, where: { Idpartner: idpartner.Idpartner } })

            for (var i = 0; i < arrActivity.length; i++) {
                const typeObj = await type.findOne({ raw: true, where: { idtype: arrActivity[i].idtype }, order: ['idtype'] })
                arrActivity[i].type = typeObj.type
            }
            res.render('tables', { activity: arrActivity, user: userPartner })
            // res.send(arrActivity)
        }
        if (stt != undefined) {
            var activityObj = await activity.findOne({ raw: true, where: { IdActivity: stt }, order: ['IdActivity'] })

            if (activityObj.Stt == true) {
                await activity.update({ Stt: 0 }, { where: { IdActivity: stt } })
                const arrActivity = await activity.findAll({ raw: true, where: { Idpartner: idpartner.Idpartner } })

                for (var i = 0; i < arrActivity.length; i++) {
                    const typeObj = await type.findOne({ raw: true, where: { idtype: arrActivity[i].idtype }, order: ['idtype'] })
                    arrActivity[i].type = typeObj.type
                }
                res.render('tables', { activity: arrActivity, user: userPartner })
            } else {
                await activity.update({ Stt: 1 }, { where: { IdActivity: stt } })
                const arrActivity = await activity.findAll({ raw: true, where: { Idpartner: idpartner.Idpartner } })

                for (var i = 0; i < arrActivity.length; i++) {
                    const typeObj = await type.findOne({ raw: true, where: { idtype: arrActivity[i].idtype }, order: ['idtype'] })
                    arrActivity[i].type = typeObj.type
                }
                res.render('tables', { activity: arrActivity, user: userPartner })
            }
        }
    }
    async search(req, res) {
        var userPartner = req.signedCookies.Cookie_User;
        var idpartner = {}
        await partner.findOne({ raw: true, where: { UserPartner: userPartner } }).then(e => idpartner = e)

        var activitySearch = req.body.activity;
        const arrActivity = await activity.findAll({ raw: true, where: { Idpartner: idpartner.Idpartner } })

        for (var i = 0; i < arrActivity.length; i++) {
            const typeObj = await type.findOne({ raw: true, where: { idtype: arrActivity[i].idtype }, order: ['idtype'] })
            arrActivity[i].type = typeObj.type
        }

        for (var i = 0; i < arrActivity.length;) {
            if (!arrActivity[i].type.toLowerCase().trim().includes(activitySearch)) {
                arrActivity.splice(i, 1);
            } else {
                i++
            }
        }
        res.render('tables', { activity: arrActivity, user: userPartner })
    }
}

module.exports = new TableController;