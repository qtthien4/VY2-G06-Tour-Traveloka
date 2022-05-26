const { Sequelize } = require('sequelize');

module.exports = (db) => {
    return db.define('country', {      
        IdCountry: Sequelize.CHAR(20),
        CountryName: Sequelize.TEXT,
        imageUrl: Sequelize.TEXT,      
      },{
      timestamps: false,
      })
}