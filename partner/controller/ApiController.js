const sql = require('mssql/msnodesqlv8')
const sqlConfig = require('../calldb')
class ApiController{
    index(req, res) {        
        var idCountry = req.query.IdCountry;
        var idCity = req.query.idCity;
         //var type = req.query.type; 
        if(idCountry == undefined && idCity == undefined){
             sql.connect(sqlConfig, function(err){                
                if(err)
                console.log( err);
            
                var re = new sql.Request();
                re.query('select * from activity', function(err, result){
                    if(err) console.log(err) 
                    res.send(result.recordset);
                })
            })
        }       
               
         if(idCountry != undefined ){
            sql.connect(sqlConfig, function(err){                
                if(err)
                console.log( err);            
                var re = new sql.Request();
                var query = 'select * from activity where idCountry = ' + idCountry
                re.query(query, function(err, result){
                    if(err) console.log(err) 
                    res.send(result.recordset);
                    //console.log(result.recordset);
                })
            })
         }
         if(idCity != undefined ){
            sql.connect(sqlConfig, function(err){                
                if(err)
                console.log( err);            
                var re = new sql.Request();
                var query = 'select * from activity where idCity = ' + idCity
                re.query(query, function(err, result){
                    if(err) console.log(err) 
                    res.send(result.recordset);
                    //console.log(result.recordset);
                })
            })
         }
    }
}

module.exports = new ApiController