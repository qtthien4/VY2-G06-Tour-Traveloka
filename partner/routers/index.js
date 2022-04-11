const api = require("./api")
const login = require("./login")
const signup = require('./signup')
const home = require('./home')
const table = require('./table')
const form = require('./form')
const chart = require('./chart')

function route(app){
    app.use('/api', api)
    app.use('/login', login)
    app.use('/signup', signup)
    app.use('/home', home)
    app.use('/tables', table)
    app.use('/form', form)
    app.use('/charts', chart)
}

module.exports = route