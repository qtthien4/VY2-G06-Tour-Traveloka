var { activity } = require('../../configDb');
const PartnerService = require('../Partner');

class ActivityService {
    constructor(userPartner) {
        this.userPartner = userPartner
    }

    async getActivityFromPartner() {
        const partnerService = new PartnerService(this.userPartner)

        return await activity.findAll({
            raw: true,
            where: {
                Idpartner: await partnerService.getIdPartner()
            },
            order: ['Idpartner']
        })
    }



}
module.exports = ActivityService