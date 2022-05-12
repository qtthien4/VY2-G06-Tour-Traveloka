const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'traveloka',
    username: 'sa',
    password: 'Qq123456789',
    host: '95.111.203.185',
    port: '1433',
    dialect: 'mssql',
    dialectOptions:{
        ssl: false
    },
    define: {
        freezeTableName: true
    }
  });

  db.authenticate()
  .then(() => console.log("ket noi thanh cong"))
  .catch(err => console.log(err))

  //table partner
  const partner = db.define('Partner', {      
      IdPartner: Sequelize.CHAR(20),
      PartnerName: Sequelize.TEXT,
      password: Sequelize.CHAR(200),      
  },{
    timestamps: false,
  })
 
//table activity
  const activity = db.define('Activity',{
    IdActivity: Sequelize.CHAR(20),
    IdCountry: Sequelize.CHAR(20),
    IdCity: Sequelize.CHAR(20),
    IdPartner: Sequelize.CHAR(20),
    idtype: Sequelize.CHAR(20),
    ActivityName: Sequelize.TEXT,
    Location: Sequelize.TEXT,
    Amount: Sequelize.INTEGER,
    Stt: Sequelize.BOOLEAN,
    Price: Sequelize.INTEGER,
    Desr: Sequelize.TEXT,
    ImageUrl: Sequelize.TEXT,
  },{timestamps: false})

//table imgae
    const image = db.define('Image', {      
        IdImage: Sequelize.CHAR(20),
        IdActivity: Sequelize.CHAR(20),
        Link: Sequelize.TEXT,      
    },{
    timestamps: false,
    })

//table country
const country = db.define('country', {      
  IdCountry: Sequelize.CHAR(20),
  CountryName: Sequelize.TEXT,
  imageUrl: Sequelize.TEXT,      
},{
timestamps: false,
})


//table city
const city = db.define('City', {      
  IdCity: Sequelize.CHAR(20),
  IdCountry: Sequelize.TEXT,
  CityName: Sequelize.TEXT,
},{
timestamps: false,
})

//tabletype
const type = db.define('type', {      
  idtype: Sequelize.CHAR(20),
  type: Sequelize.CHAR(20),
},{
timestamps: false,
})

//table favourite
const favourite = db.define('favourite', {      
  IdFavourite: Sequelize.CHAR(20),
  IdCustomer: Sequelize.CHAR(20),
  IdActivity: Sequelize.CHAR(20),
},{
timestamps: false,
})

//table schedule
const schedule = db.define('Schedule', {      
  IdSchedule: Sequelize.CHAR(20),  
  IdActivity: Sequelize.CHAR(20),
  StartTime: Sequelize.STRING,
  EndTime: Sequelize.STRING,
},{
timestamps: false,
})

//table keysearch
const keysearch = db.define('keysearch', {      
  IdSearch: Sequelize.CHAR(20),  
  IdCustomer: Sequelize.CHAR(20),
  keyword: Sequelize.STRING,
},{
timestamps: false,
})

//table booking
const book = db.define('Booking', {
  IdBooking: Sequelize.CHAR(20),  
  IdSchedule: Sequelize.CHAR(20),  
  IdCustomer: Sequelize.CHAR(20),
  IdVoucher: Sequelize.CHAR(20),
  PaymentOption:  Sequelize.CHAR(2),
  BookingTime: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Total: Sequelize.STRING,
  SttBooking: Sequelize.BOOLEAN,
  AmountPeople: Sequelize.INTEGER,
  Discount: {
    type: Sequelize.FLOAT,
    allowNull: true
  }
},{
  timestamps: false,
  })

//table customer
const customer = db.define('CusDetail', {
  IdDetail: Sequelize.CHAR(20),  
  IdBooking: Sequelize.CHAR(20),  
  CustomerName: Sequelize.TEXT,
  CusPhoneNum: Sequelize.TEXT,
  EmailCus:  Sequelize.TEXT,
  Gender: Sequelize.STRING
},{
  timestamps: false,
  })
 
//remove id table
type.removeAttribute('id');
country.removeAttribute('id');
city.removeAttribute('id');
image.removeAttribute('id');
activity.removeAttribute('id');
partner.removeAttribute('id');
favourite.removeAttribute('id');
schedule.removeAttribute('id');
keysearch.removeAttribute('id');
book.removeAttribute('id');
customer.removeAttribute('id');

db.sync();

   module.exports = {partner, activity, image, type, country, city,favourite, schedule, keysearch, book,customer}