const sql = require("mssql/msnodesqlv8");
const sqlConfig = {
  database: "traveloka",
  server: "DESKTOP-CJS18RE\\MSSQL_EXP_2008R2",
  driver: "msnodesqlv8",
  port: 54945,
  options: {
    trustedConnection: true,
  },
};

module.exports = sqlConfig;
