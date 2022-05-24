const { Sequelize } = require('sequelize');

module.exports = (db) => {
    return db.define('city', {      
      IdCity: Sequelize.CHAR(20),
      IdCountry: Sequelize.CHAR(20),
      CityName: Sequelize.TEXT,
    },{
    timestamps: false,
    })
}