const { Sequelize } = require("sequelize");
const ActivityModel = require("./models/activity.model");
const PartnerModel = require("./models/partner.model");
const ImageModel = require("./models/image.model");
const CountryModel = require("./models/country.model");
const CityModel = require("./models/city.model");
const TypeModel = require("./models/type.model");
const FavouriteModel = require("./models/favourite.model");
const ScheduleModel = require("./models/schedule.model");
const KeySearchModel = require("./models/keysearch.model");
const BookingModel = require("./models/booking.model");
const CustomerModel = require("./models/customer.model");
const UserModel = require("./models/user.model");

require("dotenv").config();

// const db = new Sequelize({
//   database: process.env.NAME_DATABASE,
//   username: process.env.USERNAME_DB,
//   password: process.env.PASSWORD_DB,
//   host: process.env.SERVER_DB,
//   port: process.env.PORT_DB,
//   dialect: "mssql",
//   dialectOptions: {
//     ssl: false,
//   },
//   define: {
//     freezeTableName: true,
//   },
// });

const db = new Sequelize(process.env.DB_URI);

const activity = ActivityModel(db);
const partner = PartnerModel(db);
const image = ImageModel(db);
const country = CountryModel(db);
const city = CityModel(db);
const type = TypeModel(db);
const favourite = FavouriteModel(db);
const schedule = ScheduleModel(db);
const keysearch = KeySearchModel(db);
const book = BookingModel(db);
const customer = CustomerModel(db);
const user = UserModel(db);

//remove id table
type.removeAttribute("id");
country.removeAttribute("id");
city.removeAttribute("id");
image.removeAttribute("id");
activity.removeAttribute("id");
favourite.removeAttribute("id");
schedule.removeAttribute("id");
keysearch.removeAttribute("id");
book.removeAttribute("id");
customer.removeAttribute("id");
user.removeAttribute("id");

db.sync();

db.authenticate()
  .then(() => console.log("ket noi thanh cong"))
  .catch((err) => console.log(err));

module.exports = {
  partner,
  activity,
  image,
  type,
  country,
  city,
  favourite,
  schedule,
  keysearch,
  book,
  customer,
  user,
};