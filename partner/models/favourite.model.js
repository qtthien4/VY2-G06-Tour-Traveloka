const { Sequelize } = require("sequelize");

module.exports = (db) => {
  return db.define(
    "favourite",
    {
      IdFavourite: Sequelize.CHAR(20),
      IdCustomer: Sequelize.CHAR(20),
      IdActivity: Sequelize.CHAR(20),
    },
    {
      timestamps: false,
    }
  );
};
