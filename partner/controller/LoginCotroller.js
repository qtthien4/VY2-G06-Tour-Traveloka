const bcrypt = require("bcrypt");
const { partner } = require("../configDb");
const axios = require("axios");
const jwt_decode = require("jwt-decode");

class Login {
  index(req, res) {
    res.render("login");
  }
  async postLogin(req, res) {
    var user = req.body.user;
    var pass = req.body.password;

    var dataLogin = {
      username: user,
      password: pass,
    };
    console.log("dataLogin", dataLogin);
    try {
      // const login = await axios.post(
      //   "https://profile.vinhphancommunity.xyz/api/auth/login",
      //   dataLogin
      // );
      if (dataLogin) {
        // var decoded = jwt_decode(login.data.data.access_token);
        // console.log(decoded);
        const checkAccount = await partner.findOne({
          raw: true,
          where: {
            UserPartner: dataLogin.username,
          },
          order: ["UserPartner"],
        });
        console.log("checkAccount", checkAccount);
        if (checkAccount.UserPartner.trim() == user) {
          res.cookie("Cookie_User", user, {
            signed: true,
          });
          res.redirect("home");
        } else {
          res.render("login", { err: ["sai tài khoản"] });
        }
      }
    } catch (error) {
      res.render("login", { err: "loi" });
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

module.exports = new Login();
