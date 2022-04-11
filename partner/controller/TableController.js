const sql = require('mssql/msnodesqlv8')
const sqlConfig = require('../calldb')
class TableController{
    index(req, res) {        
        res.render('tables')
    }
}

module.exports = new TableController