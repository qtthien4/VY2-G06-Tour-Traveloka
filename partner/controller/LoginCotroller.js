const bcrypt = require('bcrypt');
const sql = require('mssql/msnodesqlv8')
const sqlConfig = require('../calldb')
class Login{
    index(req,res){
        res.render('login');
    }
    postLogin(req,res){
        var user = req.body.user;
        var pass = req.body.password;
        
        var queryuser = `select * from partner where partnername = '${user}'`
        sql.connect(sqlConfig, function(err){                
            if(err)
            console.log( err);                    
            var re = new sql.Request();
            re.query(queryuser, function(err, result){
                if(err) console.log(err)                    
                var userinfor = result.recordset            
                //console.log(userinfor[0].password)  

                    bcrypt.compare(pass, userinfor[0].password.trim()).then(function(result) {
                        if(result)
                        {
                            res.cookie('Cookie_User', "result[0].IdPartner", {
                                signed: true
                            })
                            res.redirect('home')
                        }else{
                            res.render('login', {err:['vui lòng nhâp đúng mất khẩu']});
                        }
                    });
            })
        })    
       
    }
}

module.exports = new Login