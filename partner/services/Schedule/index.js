const { Op } = require('sequelize');
var { schedule } = require('../../configDb');
const ActivityService = require('../Activity');

class ScheduleService {
    constructor(userPartner) {
        this.userPartner = userPartner
    }

    async getAllSchuduleFormActivityByPartner() {
        const activityService = new ActivityService(this.userPartner)
        const activityId = (await activityService.getActivityFromPartner()).map(activity => activity.IdActivity)

        const scheduleAll = await schedule.findAll({
            raw: true,
            where: {
                IdActivity: {
                    [Op.in]: activityId
                }
            }
        })
        return scheduleAll
    }


}

module.exports = ScheduleService