const { Sequelize } = require('sequelize');
module.exports = (db) => {
    return db.define('Partner', {      
        Idpartner: {
          type: Sequelize.CHAR(20),
          primaryKey: true
        },
        UserPartner: Sequelize.CHAR(20),
        password: Sequelize.CHAR(200),      
      },{
        timestamps: false,
      })
}
