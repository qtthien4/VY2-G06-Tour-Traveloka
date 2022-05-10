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
                PartnerName: user
            },
            order: ['PartnerName'],
            raw: true
        }).then(user => {            
            bcrypt.compare(pass, user.password.trim()).then(function(result) {
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
    }
}

module.exports = new Login