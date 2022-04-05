const sql = require('mssql/msnodesqlv8')
const sqlConfig = {
  
  database: "traveloka",
  server: 'LAPTOP-O552NIIB\\SQLEXPRESS',
  driver: 'msnodesqlv8',
  post: 12345,
  options: {
    trustedConnection: true
  }
}

sql.connect(sqlConfig, function(err){
    if(err)
    console.log( err);

    var re = new sql.Request();
    re.query('select * from country', function(err, result){
        if(err) console.log(err) 
        console.log(result.recordset[0].CountryName);
    })
})
sql.close();
