var shortid = require('shortid');
const bcrypt = require('bcrypt');
const {partner} = require('../configDb');
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
                    partner.create({
                        Idpartner: shortid.generate(),
                        UserPartner: username,
                        password: hash
                    }).then(user => {
                        console.log(user.get({plain:true}))
                        res.redirect('login')
                    })
                    .catch(err => console.log(err))
                 }
            });
            
        }
    }
}

module.exports = new signUpController