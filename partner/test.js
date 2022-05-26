var {activity, schedule, book, user, type, partner} = require('./configDb');

async function dime(){
    var a = []

    var idpartner = await partner.findOne({raw:true, where: {UserPartner: "vothien"}})

    var arrActivity = await activity.findAll({raw: true, where: {Idpartner : idpartner.Idpartner}})
    
    for(var i = 0; i < arrActivity.length; i++){
        var arrSchedule = await schedule.findAll({raw: true, where: {IdActivity:arrActivity[i].IdActivity}})

        for(var j = 0; j <  arrSchedule.length; j++){
           var arrBoking =  await book.findAll({raw: true, where: {IdSchedule: arrSchedule[j].IdSchedule}})
            
            a = [...a, ...arrBoking]
        }
        console.log(a)
    }
}

dime();