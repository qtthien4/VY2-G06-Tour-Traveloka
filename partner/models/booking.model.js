const { Sequelize } = require('sequelize');

module.exports = (db) => {
    return db.define('Booking', {
        IdBooking: Sequelize.CHAR(20),  
        IdSchedule: Sequelize.CHAR(20),  
        IdCustomer: Sequelize.CHAR(20),
        IdVoucher: {
          type: Sequelize.CHAR(20),
          allowNull: true
        },
        IdGift: {
          type: Sequelize.CHAR(20),
          allowNull: true
        },
        PaymentOption:  Sequelize.CHAR(2),
        BookingTime: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        Total: {
          type: Sequelize.STRING,
          allowNull: true
        },
        Reduce: {
          type: Sequelize.STRING,
          allowNull: true
        },
        SttBooking: Sequelize.STRING,
        AmountPeople: Sequelize.INTEGER,
        IdPayment: {
          type: Sequelize.STRING,
          allowNull: true
        }
      },{
        timestamps: false,
        })
}