const bcrypt = require('bcrypt');
const {partner} = require('../configDb');
class Login{
    index(req,res){
        res.render('login');
    }
    postLogin(req,res){
        var user = req.body.user;
        var pass = req.body.password;
        partner.findOne({
            where: {
                UserPartner: user
            },
            order: ['UserPartner'],
            raw: true
        }).then(users => {            
            bcrypt.compare(pass, users.password.trim()).then(function(result) {
                if(result)
                {
                    res.cookie('Cookie_User',user, {
                        signed: true
                    })
                    res.redirect('home')
                }else{
                    res.render('login', {err:['vui lòng nhâp đúng mất khẩu']});
                }
            });
        })
    }
}

module.exports = new Login