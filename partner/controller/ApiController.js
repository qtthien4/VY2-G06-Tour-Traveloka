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
  favourite(req, res) {
    var IdActivity = req.body.IdActivity;
    var idCustomer = req.body.idCustomer;
    var idFavaurite = req.body.idFavaurite;
    console.log(req.body);
    console.log(IdActivity, idCustomer, idFavaurite);

    // var re = new sql.Request();
    // var insertFavaurite = `insert into favaurite (IdFavaurite, IdCustomer, IdActivity) values('${idFavaurite}', '${idCustomer}','${IdActivity}')`;
    // re.query(insertFavaurite, function (err, result) {
    //   if (err) console.log(err);
    //   console.log(result);
    // });
    sql.connect(sqlConfig, (err) => {
      if (err) console.log(err);
      var re = new sql.Request();
      var insertFavaurite = `insert into favourite (IdFavourite, IdCustomer, IdActivity) values('${idFavaurite}', '${idCustomer}','${IdActivity}')`;
      re.query(insertFavaurite, function (err, result) {
        if (err) console.log(err);
        console.log(result);
      });
    });
  }

  getFavourite(req, res) {
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);
      var re = new sql.Request();
      re.query("select * from favourite", function (err, result) {
        if (err) console.log(err);
        res.send(result.recordset);
      });
    });
  }

  keysearch(req, res) {
    sql.connect(sqlConfig, function (err) {
      if (err) console.log(err);

      var re = new sql.Request();
      re.query("select * from keysearch", function (err, result) {
        if (err) console.log(err);
        res.send(result.recordset);
      });
    });
  }

  deleteFavourite(req, res) {
    // var IdActivity = req.body.IdActivity;
    // var idCustomer = req.body.idCustomer;
    // var idFavaurite = req.body.idFavaurite;

    var id = req.params.id;
    console.log(id);
    sql.connect(sqlConfig, (err) => {
      if (err) console.log(err);
      var re = new sql.Request();

      var deleteFavaurite = `delete from favourite  where IdActivity = '${id}'`;
      re.query(deleteFavaurite, function (err, result) {
        if (err) console.log(err);
        console.log(result);
      });
    });
  }

  getkeysearch(req, res) {
    sql.connect(sqlConfig, function (err) {
      var re = new sql.Request();
      var insertkey = `insert into keysearch values ('${shortid.generate()}', '1', '${
        req.query.q
      }')`;
      re.query(insertkey, function (err, result) {
        if (err) console.log(err);
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
    const { customerDetail } = req.body[0];
    const {booking} = req.body[1];
    var idDetail = customerDetail.idDetail;
    var idBooking = booking.idBooking;
    var customerName = customerDetail.customerName;
    var cusPhoneNum = customerDetail.cusPhoneNum;
    var emailCus = customerDetail.emailCus;

    var idSchedule = booking.idSchedule;
    var idCustomer = booking.idCustomer;
    var idVoucher = booking.idVoucher;
    var paymentOption = booking.paymentOption;
    var bookingTime = booking.bookingTime;
    var sttBooking = booking.sstBooking;
    if(sttBooking)   sttBooking = 1
    else sttBooking = 0
    
    var amountPeople = booking.amountPeople;
    var disCount = booking.disCount;
    var total = booking.total;

    console.log(req.body);
    // res.json({
    //   status: "ok",
    // });

    sql.connect(sqlConfig, (err) => {
      if(err) console.log(err)

      var re = new sql.Request();
      //add booking
      var inserBooking = `insert into Booking (IdBooking, IdSchedule, IdCustomer, IdVoucher, PaymentOption, BookingTime, Total, SttBooking, AmountPeople,Discount) values 
      ('${idBooking}', '${idSchedule}','${idCustomer}','${idVoucher}' , '${paymentOption}', '', '${total}',${sttBooking}, ${amountPeople}, '')`

      re.query(inserBooking, function (err, result) {
        if (err) console.log(err);
        console.log(result);
      });
      //add customer
      var insertCustomerDetail = `insert into CusDetail (IdDetail, IdBooking, CustomerName, CusPhoneNum, EmailCus) values('${idDetail}','${idBooking}',N'${customerName}','${cusPhoneNum}','${emailCus}')`
      // console.log(insertCustomerDetail);
      re.query(insertCustomerDetail, function (err, result) {
        if (err) console.log(err);
        console.log(result);
      });
    })
  }
}

module.exports = new ApiController();
