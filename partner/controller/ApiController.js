const sql = require('mssql/msnodesqlv8')
const sqlConfig = require('../calldb')
class ApiController{
    index(req, res) {        
        sql.connect(sqlConfig, function(err){                
                if(err)
                console.log( err);
            
                var re = new sql.Request();
                re.query('select * from activity', function(err, result){
                    if(err) console.log(err) 
                    res.send(result.recordset);
                })
            })        

            console.log(req.query.a)
    }

    testpost(req,res){
        console.log(req.body)
    }
}

module.exports = new ApiController