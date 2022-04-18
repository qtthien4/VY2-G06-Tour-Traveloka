const sql = require("mssql/msnodesqlv8");
const sqlConfig = require("../calldb");
const shortid = require("shortid");
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
      var insertkey = `insert into keysearch values ('${shortid.generate()}', '1', '${
        req.query.q
      }')`;
      re.query(insertkey, function (err, result) {
        if (err) console.log(err);
        console.log(result.recordset);
      });
    });
  }
  image(req, res) {
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);
      var re = new sql.Request();
      var getschedule = `select * from Image`;
      re.query(getschedule, function (err, result) {
        if (err) console.log(err);
        res.send(result.recordset);
      });
    });
  }
  imageId(req, res) {
    var id = req.params.id;
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);
      var re = new sql.Request();
      var getschedule = `select * from image where IdActivity = '${id}' `;
      re.query(getschedule, function (err, result) {
        if (err) console.log(err);
        res.send(result.recordset);
      });
    });
  }

  schedule(req, res) {
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);
      var re = new sql.Request();
      var getschedule = `select * from schedule`;
      re.query(getschedule, function (err, result) {
        if (err) console.log(err);
        res.send(result.recordset);
      });
    });
  }

  scheduleID(req, res) {
    var id = req.params.id;
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);
      var re = new sql.Request();
      var getschedule = `select * from schedule where IdActivity = '${id}' `;
      re.query(getschedule, function (err, result) {
        if (err) console.log(err);
        res.send(result.recordset);
      });
    });
  }

  booking(req, res) {
    var idDetail = req.body[0].customerDetail.idDetail;
    var idBooking = req.body[0].customerDetail.idBooking;
    var customerName = req.body[0].customerDetail.customerName;
    var cusPhoneNum = req.body[0].customerDetail.cusPhoneNum;
    var emailCus = req.body[0].customerDetail.emailCus;
    var idDetail = req.body[0].customerDetail.idDetail;

    var idSchedule = req.body[1].booking.idSchedule;
    var idCustomer = req.body[1].booking.idCustomer;
    var idVoucher = req.body[1].booking.idVoucher;
    var paymentOption = req.body[1].booking.paymentOption;
    var bookingTime = req.body[1].booking.bookingTime;
    var sttBooking = req.body[1].booking.sttBooking;
    var amountPeople = req.body[1].booking.amountPeople;
    var disCount = req.body[1].booking.disCount;
    var total = req.body[1].booking.idDetail;

    console.log(req.body);

    console.log("--------------------------------");


  }
}

module.exports = new ApiController();
