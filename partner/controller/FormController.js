const shortid = require('shortid');
const sql = require('mssql/msnodesqlv8')
const sqlConfig = require('../calldb')
class FormController{
    index(req, res) {        
        //country
        sql.connect(sqlConfig, function(err){                
            if(err)
            console.log( err);
        
            var re = new sql.Request();
            re.query('select * from country', function(err, result){
                if(err) console.log(err)                             
                var nuoc = result.recordset
                nuoc[0].IdCountry =  nuoc[0].IdCountry.trim()
                re.query('select * from city', function(err, result){
                    if(err) console.log(err)                             
                    var thanhpho = result.recordset   
                    re.query('select * from type', function(err, result){
                        if(err) console.log(err)                             
                        var type = result.recordset 
                        
                        res.render('forms', {nuoc: nuoc, thanhpho: thanhpho, type:type})                               
                    })                              
                })
            })
            
        }) 
    }

    testpost(req,res){
        
        const idpartner = 30;
        const nuoc = req.body.nuoc;
        const thanhpho = req.body.thanhpho;
        const type = req.body.type
        const name = req.body.nameactivity;
        const place = req.body.place;
        const strprice = req.body.price;
        const stramount = req.body.amount;
        const strstt = req.body.stt;
       

        const desc = req.body.desc;
        const idactivity = req.body.idactivity;

        console.log(req.body.links)      

       sql.connect(sqlConfig, function (err) {
            if (err)
            console.log(err);            
            var insert = `insert into activity (IdActivity, IdCountry,IdCity,IdPartner,idtype,ActivityName,Location,Amount,Stt,Price, Desr ) values (${idactivity}, '${nuoc}', '${thanhpho}','${idpartner}','${type}', N'${name}', '${place}',${stramount},${strstt},${strprice},N'${desc}')`
            var re = new sql.Request();        
                re.query(insert, function (err, result) {
                if (err)
                    console.log(err);
                console.log(result);
                });
        })
    
    sql.connect(sqlConfig, (err)=>{
        if(err) console.log(err);

        for(var i = 0; i < req.body.links.length; i++){
            
            var insert = `insert into Image(IdImage, IdActivity, Link) values ('${shortid.generate()}',${idactivity}, '${req.body.links[i]}')`
            var re = new sql.Request();

            re.query(insert, (result, err)=> {
                if(err) console.log(err)

                console.log(result);
            })
                 }
    })
    
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
}

module.exports = new FormController