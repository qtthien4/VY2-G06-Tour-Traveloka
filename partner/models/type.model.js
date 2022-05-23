const { Sequelize } = require('sequelize');

module.exports = (db) => {
    return db.define('type', {      
      idtype: Sequelize.CHAR(20),
      type: Sequelize.CHAR(20),      
    },{
    timestamps: false,
    })
}