const {activity, country, city,favourite, keysearch, image, schedule, book, customer, user} = require('./configDb');
var scheduleObj =  schedule.findOne({raw:true, order: ['IdSchedule']})
scheduleObj.then(e => console.log(e))