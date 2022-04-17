class authMiddleware {
    index(req, res, next) {
        if (!req.signedCookies.Cookie_User) {
            res.redirect('/')
            return
        }

        next();

    }}


module.exports = new authMiddleware