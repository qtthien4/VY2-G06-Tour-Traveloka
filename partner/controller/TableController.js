const sql = require('mssql/msnodesqlv8')
const sqlConfig = require('../calldb')
class TableController {
    index(req, res) {
        var stt = req.query.stt;
        var del = req.query.del;

        if (del == undefined && stt == undefined) {
            sql.connect(sqlConfig, function (err) {
                if (err) console.log(err);

                var re = new sql.Request();
                re.query('select * from activity', function (err, result) {
                    if (err) console.log(err)
                    var activity = result.recordset                    
                    res.render('tables', { activity: activity })
                })
            })
        }
        if (stt != undefined && del == undefined) {
            sql.connect(sqlConfig, function (err) {
                if (err)
                    console.log(err);

                var re = new sql.Request();
                var tt 
                var select =  `select * from activity where IdActivity = '${stt}'`
               
                re.query(select, function (err, result) {
                    if (err) console.log(err);
                    console.log(result.recordset[0].Stt)
                    if(result.recordset[0].Stt) {
                        tt = 0
                    }else tt = 1
                    console.log(tt)
                    var updatestt = `UPDATE Activity SET Stt = ${tt} where IdActivity = '${stt}'`
                    re.query(updatestt, function (err, result) {
                    if (err) console.log(err)
                    
                    console.log(result)
                })

                })
                re.query('select * from activity', function (err, result) {
                    if (err) console.log(err)
                    var activity = result.recordset                    
                    res.render('tables', { activity: activity })
                })

            })
        }
        if (del != undefined && stt == undefined) {
            sql.connect(sqlConfig, function (err) {
                if (err)
                    console.log(err);

                var re = new sql.Request();
                var delfavorite = `Delete from favourite where IdActivity = '${del}'`
                var delschedule = `Delete from schedule where IdActivity = '${del}'`
                var delimg = `Delete from image where IdActivity = '${del}'`
                var delactivity = `Delete from Activity where IdActivity = '${del}'`
               
                re.query(delfavorite, function (err, result) {
                    if (err) console.log(err);
                    console.log(result);
                })
                re.query(delschedule, function (err, result) {
                    if (err) console.log(err);
                    console.log(result);
                })
                re.query(delimg, function (err, result) {
                    if (err) console.log(err);
                    console.log(result);
                })
                re.query(delactivity, function (err, result) {
                    if (err) console.log(err);
                    console.log(result);
                })
                re.query('select * from activity', function (err, result) {
                    if (err) console.log(err)
                    var activity = result.recordset                    
                    res.render('tables', { activity: activity })
                })
            })
        }

    }
}

module.exports = new TableController;