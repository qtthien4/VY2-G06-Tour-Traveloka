var { partner } = require('../../configDb');

class PartnerService {

    constructor(userPartner) {
        this.userPartner = userPartner
    }

    async getIdPartner() {
        var idPartner = await partner.findOne({
            raw: true, where: {
                UserPartner: this.userPartner
            }, order: ['UserPartner']
        })
        return idPartner.Idpartner
    }

}

module.exports = PartnerService;