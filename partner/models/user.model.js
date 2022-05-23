const { Sequelize } = require('sequelize');

module.exports = (db) => {
    return db.define('customer',{
        IdCustomer: Sequelize.CHAR(20),
        Name: Sequelize.STRING,
        Phone: Sequelize.STRING,
        email:Sequelize.STRING,
        gender:Sequelize.CHAR(10), 
        point: Sequelize.INTEGER,
        password:Sequelize.STRING,
      }, {
        timestamps: false
      })
}