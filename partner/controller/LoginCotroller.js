const bcrypt = require('bcrypt');
const { partner } = require('../configDb');
const axios = require('axios');
const jwt_decode = require('jwt-decode');

class Login {
    index(req, res) {
        res.render('login');
    }
    async postLogin(req, res) {
        var user = req.body.user;
        var pass = req.body.password;

        var dataLogin = {
            username: user,
            password: pass
        }
        try {
            const login = await axios.post('https://profile.vinhphancommunity.xyz/api/auth/login', dataLogin)
            if (login.data.success) {
                var decoded = jwt_decode(login.data.data.access_token);
                console.log(decoded);
                const checkAccount = await partner.findOne({
                    raw: true,
                    where: {
                        UserPartner: decoded.username
                    },
                    order: ['UserPartner']
                })
                console.log(checkAccount);
                if (checkAccount.UserPartner.trim() == decoded.username) {
                    res.cookie('Cookie_User', user, {
                        signed: true
                    })
                    res.redirect('home')
                } else {
                    res.render('login', { err: ['sai tài khoản'] });
                }
            }
        } catch (error) {
            res.render(error);
        }


        // partner.findOne({
        //     where: {
        //         UserPartner: user
        //     },
        //     order: ['UserPartner'],
        //     raw: true
        // }).then(users => {            
        //     bcrypt.compare(pass, users.password.trim()).then(function(result) {
        //         if(result)
        //         {
        //             res.cookie('Cookie_User',user, {
        //                 signed: true
        //             })
        //             res.redirect('home')
        //         }else{
        //             res.render('login', {err:['vui lòng nhâp đúng mất khẩu']});
        //         }
        //     });
        // })
    }
}

module.exports = new Login