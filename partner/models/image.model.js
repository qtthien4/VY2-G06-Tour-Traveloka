const { Sequelize } = require('sequelize');

module.exports = (db) => {
    return db.define('Image', {      
        IdImage: Sequelize.CHAR(20),
        IdActivity: Sequelize.CHAR(20),
        Link: Sequelize.TEXT,      
    },{
    timestamps: false,
    })
}