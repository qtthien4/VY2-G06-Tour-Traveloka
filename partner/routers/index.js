const api = require("./api")
const login = require("./login")
const signup = require('./signup')
const home = require('./home')

function route(app){
    app.use('/api', api)
    app.use('/login', login)
    app.use('/signup', signup)
    app.use('/home', home)
}

module.exports = route