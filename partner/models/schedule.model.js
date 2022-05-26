const { Sequelize } = require('sequelize');

module.exports = (db) => {
    return db.define('Schedule', {      
      IdSchedule: Sequelize.CHAR(20),  
      IdActivity: Sequelize.CHAR(20),
      StartTime: Sequelize.STRING,
      EndTime: Sequelize.STRING,
      Amount: Sequelize.INTEGER,
      AmountBooking: Sequelize.INTEGER,
      Status: Sequelize.BOOLEAN
    },{
    timestamps: false,
    })
}