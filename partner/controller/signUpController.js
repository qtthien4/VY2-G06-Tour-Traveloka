var shortid = require("shortid");
const bcrypt = require("bcrypt");
const axios = require("axios");
const { partner } = require("../configDb");
class signUpController {
  index(req, res) {
    res.render("signup");
  }

  async postsignup(req, res) {
    var a = req.body;
    // console.log(a);

    var dataRegister = {
      userId: "",
      email: req.body.email,
      username: req.body.Username,
      name: req.body.name,
      gender: req.body.gender,
      dob: req.body.dob,
      phone: req.body.phone,
      address: req.body.address,
      type: "",
      reward: 0,
      services: ["XPERIENCE"],
      companyName: req.body.companyName,
      access_token: "",
      password: req.body.password,
    };

    // console.log(dataRegister)
    var pass = req.body.password;
    var confirm = req.body.confirmpassword;

    if (pass != confirm) {
      res.render("signup", { err: ["vui lòng nhâp đúng mất khẩu"] });
      console.log("?? cacs thuws");
    }
    if ((pass = confirm)) {
      try {
        // const register = await axios.post('https://profile.vinhphancommunity.xyz/api/auth/signup',
        //     dataRegister
        // )
        // console.log(register.data);
        await partner
          .create({
            Idpartner: shortid.generate(),
            UserPartner: req.body.Username,
            password: req.body.password,
          })
          .then((user) => {
            console.log(user.get({ plain: true }));
            res.redirect("login");
          })
          .catch((err) => console.log(err));
      } catch (error) {
        res.render("signup", { err: [error.response.data.message] });
        console.log(error.response.data.message);
      }
    }
  }
}

module.exports = new signUpController();
