const api = require("./api");
const login = require("./login");
const signup = require("./signup");
const home = require("./home");
const table = require("./table");
const form = require("./form");
const chart = require("./chart");
const detailactivity = require("./detailactivity");
const payment = require('./payment');
const listgift = require("./listgift");
const listvoucher = require('./listvoucher');


function route(app) {
  app.use("/api", api);
  app.use("/login", login);
  app.use("/signup", signup);
  app.use("/home", home);
  app.use("/table", table);
  app.use("/form", form);
  app.use("/chart", chart);
  app.use("/detailactivity", detailactivity);
  app.use("/payment", payment);
  app.use("/listgift", listgift);
  app.use("/listvoucher", listvoucher);
}

module.exports = route;
