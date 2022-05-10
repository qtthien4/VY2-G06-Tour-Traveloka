const sql = require('mssql/msnodesqlv8')
// const sqlConfig = {  
//   database: "traveloka",
//   server: 'LAPTOP-O552NIIB\\SQLEXPRESS',
//   driver: 'msnodesqlv8',
//   port: 12345,
//   options: {
//     trustedConnection: true,
//   }
// }
const sqlConfig = {  
  user: "sa",
  password: "Qq123456789",
  database: "traveloka",
  server: '95.111.203.185',
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

module.exports =  sqlConfig


