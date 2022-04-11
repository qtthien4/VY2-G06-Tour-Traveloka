const shortid = require('shortid');
const sql = require('mssql/msnodesqlv8')
const sqlConfig = require('../calldb')
class FormController{
    index(req, res) {
        var nuoc, type
        var thanhpho 
        
        //country
        sql.connect(sqlConfig, function(err){                
            if(err)
            console.log( err);
        
            var re = new sql.Request();
            re.query('select * from country', function(err, result){
                if(err) console.log(err)                             
                nuoc = result.recordset
                re.query('select * from city', function(err, result){
                    if(err) console.log(err)                             
                    thanhpho = result.recordset   
                    re.query('select * from type', function(err, result){
                        if(err) console.log(err)                             
                        type = result.recordset 
                        
                        res.render('forms', {nuoc: nuoc, thanhpho: thanhpho, type:type})                               
                    })                              
                })
            })
            
        })

        
        
    }

    testpost(req,res){
        res.send('a')
        const idpartner = 30;
        const nuoc = req.body.nuoc;
        const thanhpho = req.body.thanhpho;
        const type = req.body.type
        const name = req.body.nameactivity;
        const place = req.body.place;
        const strprice = req.body.price;
        const stramount = req.body.amount;
        const strstt = req.body.stt;
        //const voucher = req.body.voucher;
        const starttime = req.body.starttime;
        const endtime = req.body.endtime;
        const desc = req.body.desc;
        const idactivity = req.body.idactivity;
        const idschedule = req.body.idschedule;
        console.log(req.body)

        //handle time start
        var b = starttime.slice(2).split("T");
        var a = b[0].split("-")
        var temp = a[0];
        a[0] = a[2]
        a[2] = temp
        var handletimestart = a.join('-') +" "+  b[1]

        //handle time end
        var b = endtime.slice(2).split("T");
        var a = b[0].split("-")
        var temp = a[0];
        a[0] = a[2]
        a[2] = temp
        var handletimeend = a.join('-') +" "+  b[1]
        console.log(handletimestart);
        console.log(handletimeend);

       sql.connect(sqlConfig, function (err) {
            if (err)
            console.log(err);            
            var insert = `insert into activity (IdActivity, IdCountry,IdCity,IdPartner,idtype,ActivityName,Location,Price) values (${idactivity}, '${nuoc}', '${thanhpho}','${idpartner}','${type}', 'N${name}', '${place}',${strprice})`
            var re = new sql.Request();        
                re.query(insert, function (err, result) {
                if (err)
                    console.log(err);
                console.log(result);
                });
        })

        sql.connect(sqlConfig, function (err) {
            if (err)
            console.log(err);            
            var insert = `insert into schedule (IdSchedule,IdActivity, StartTime,EndTime,Amount,Stt,Desr) values (${idschedule},${idactivity}, convert(date,'${handletimestart}',5), convert(date,'${handletimeend}',5),${stramount},${strstt}, 'N${desc}')`
            var re = new sql.Request();        
                re.query(insert, function (err, result) {
                if (err)
                    console.log(err);
                console.log(result);
                });
        })
    }
}

module.exports = new FormController