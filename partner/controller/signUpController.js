var shortid = require('shortid');
const bcrypt = require('bcrypt');
const sql = require('mssql/msnodesqlv8')
const sqlConfig = require('../calldb')
class signUpController{
    index(req,res){
        res.render('signup');
    }

    postsignup(req,res){
        var username = req.body.username
        var pass = req.body.password;
        var confirm = req.body.confirmpassword
        // console.log(req.body)

        if(pass != confirm){ 
            res.render('signup', {err:['vui lòng nhâp đúng mất khẩu']});
            console.log("?? cacs thuws")
        }
        if(pass = confirm){
            bcrypt.hash(confirm , 10, function(err, hash) {
                if(err) console.log(err)
                else{
                    var insertk = `insert into partner (idpartner, partnername, password) values ('${shortid.generate()}', '${username}', '${hash}')`
                    sql.connect(sqlConfig, function(err){                
                        if(err)
                        console.log( err);                    
                        var re = new sql.Request();
                        re.query(insertk, function(err, result){
                            if(err) console.log(err)    
                            console.log(insertk)
                            res.redirect('login')
                        })
                    })                         
                 }
            });
            
        }
    }
}

module.exports = new signUpController