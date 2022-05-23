const { Sequelize } = require('sequelize');

module.exports = (db) => {
    return db.define('CusDetail', {
        IdDetail: Sequelize.CHAR(20),  
        IdBooking: Sequelize.CHAR(20),  
        CustomerName: Sequelize.TEXT,
        CusPhoneNum: Sequelize.TEXT,
        EmailCus:  Sequelize.TEXT,
        Gender: Sequelize.STRING
      },{
        timestamps: false,
        })
}