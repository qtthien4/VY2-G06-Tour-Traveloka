const sql = require('mssql/msnodesqlv8')
const sqlConfig = {  
  database: "traveloka",
  server: 'LAPTOP-O552NIIB\\SQLEXPRESS',
  driver: 'msnodesqlv8',
  post: 12345,
  options: {
    trustedConnection: true,
  }
}

module.exports =  sqlConfig

