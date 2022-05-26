
class HomeController{
    index(req, res) {
        var user = req.signedCookies.Cookie_User
        res.render('home', {user: user});
    }
}

module.exports = new HomeController