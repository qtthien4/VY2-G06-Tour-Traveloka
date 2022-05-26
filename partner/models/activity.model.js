const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Activity',{
        IdActivity: Sequelize.CHAR(20),
        IdCountry: Sequelize.CHAR(20),
        IdCity: Sequelize.CHAR(20),
        Idpartner: Sequelize.CHAR(20),
        idtype: Sequelize.CHAR(20),
        ActivityName: Sequelize.TEXT,
        Location: Sequelize.TEXT,
        Amount: Sequelize.INTEGER,
        Stt: Sequelize.BOOLEAN,
        Price: Sequelize.INTEGER,
        Desr: Sequelize.TEXT,
        ImageUrl: Sequelize.TEXT,
      },{timestamps: false})
}