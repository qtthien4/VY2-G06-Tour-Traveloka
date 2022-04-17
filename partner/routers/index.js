const api = require("./api");
const login = require("./login");
const signup = require("./signup");
const home = require("./home");
const table = require("./table");
const form = require("./form");
const chart = require("./chart");
const detailactivity = require("./detailactivity");

function route(app) {
  app.use("/api", api);
  app.use("/login", login);
  app.use("/signup", signup);
  app.use("/home", home);
  app.use("/table", table);
  app.use("/form", form);
  app.use("/chart", chart);
  app.use("/detailactivity", detailactivity);
}

module.exports = route;
