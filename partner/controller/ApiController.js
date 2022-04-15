const sql = require("mssql/msnodesqlv8");
const sqlConfig = require("../calldb");
const shortid = require('shortid');
class ApiController {
  index(req, res) {
    var idCountry = req.query.IdCountry;
    var idCity = req.query.idCity;
    //var type = req.query.type;
    if (idCountry == undefined && idCity == undefined) {
      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        var re = new sql.Request();
        re.query("select * from activity", function (err, result) {
          if (err) console.log(err);
          res.send(result.recordset);
        });
      });
    }

    if (idCountry != undefined) {
      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);
        var re = new sql.Request();
        var query = "select * from activity where idCountry = " + idCountry;
        re.query(query, function (err, result) {
          if (err) console.log(err);
          res.send(result.recordset);
          //console.log(result.recordset);
        });
      });
    }
    if (idCity != undefined) {
      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);
        var re = new sql.Request();
        var query = "select * from activity where idCity = " + idCity;
        re.query(query, function (err, result) {
          if (err) console.log(err);
          res.send(result.recordset);
          //console.log(result.recordset);
        });
      });
    }
  }

  tour(req, res) {
    var idCountry = req.query.IdCountry;
    console.log(idCountry);
    var idCity = req.query.idCity;
    //var type = req.query.type;
    if (idCountry == undefined && idCity == undefined) {
      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        var re = new sql.Request();
        re.query("select * from activity", function (err, result) {
          if (err) console.log(err);
          res.send(result.recordset);
        });
      });
    }

    if (idCountry != undefined) {
      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);
        var re = new sql.Request();
        var query = "select * from activity where idCountry = " + idCountry;
        re.query(query, function (err, result) {
          if (err) console.log(err);
          res.send(result.recordset);
          //console.log(result.recordset);
        });
      });
    }
    if (idCity != undefined) {
      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);
        var re = new sql.Request();
        var query = "select * from activity where idCity = " + idCity;
        re.query(query, function (err, result) {
          if (err) console.log(err);
          res.send(result.recordset);
          //console.log(result.recordset);
        });
      });
    }
  }

  show(req, res, next) {
    var id = req.params.slug;
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);

      var re = new sql.Request();
      re.query(
        "select * from activity where IdActivity =" + id,
        function (err, result) {
          if (err) console.log(err);
          res.send(result.recordset);
        }
      );
    });
  }
  
  city(req, res) {
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);

      var re = new sql.Request();
      re.query("select * from City", function (err, result) {
        if (err) console.log(err);
        res.send(result.recordset);
      });
    });
  }

  country(req, res) {
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);
      var re = new sql.Request();
      re.query("select * from country", function (err, result) {
        if (err) console.log(err);
        res.send(result.recordset);
      });
    });
  }

  getkeysearch(req, res) {
    console.log(req.query);
   
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);
      var re = new sql.Request();
      var insertkey = `insert into keysearch values ('${shortid.generate()}', '1', '${req.query.q}')`
      re.query(insertkey, function (err, result) {
        if (err) console.log(err);
        console.log(result.recordset);
      });
    });

  }
  
}

module.exports = new ApiController();
