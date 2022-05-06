const sql = require('mssql/msnodesqlv8')
// const sqlConfig = {  
//   database: "traveloka",
//   server: 'LAPTOP-O552NIIB\\SQLEXPRESS',
//   driver: 'msnodesqlv8',
//   post: 12345,
//   options: {
//     trustedConnection: true,
//   }
// }
const sqlConfig = {  
  user: "sa",
  password: "Qq123456789",
  database: "traveloka",
  server: 'http://95.111.202.253/',
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

