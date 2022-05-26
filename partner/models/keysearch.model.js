const { Sequelize } = require('sequelize');

module.exports = (db) => {
    return db.define('keysearch', {      
        IdSearch: Sequelize.CHAR(20),  
        IdCustomer: Sequelize.CHAR(20),
        keyword: Sequelize.STRING,
      },{
      timestamps: false,
      })
}