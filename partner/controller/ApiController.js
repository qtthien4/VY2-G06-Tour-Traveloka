const sql = require("mssql/msnodesqlv8");
const sqlConfig = require("../calldb");
const shortid = require("shortid");
const {activity, country, city,favourite, keysearch, image, schedule, book, customer} = require('../configDb');
class ApiController {
  index(req, res) {
    
  }

  tour(req, res) {
    var idCountry = req.query.IdCountry;
    var idCity = req.query.idCity;

    if (idCountry == undefined && idCity == undefined) {
      activity.findAll({raw: true}).then(arrActivity => res.send(arrActivity))      
    }
    if (idCountry != undefined) {
      activity.findAll({raw: true, where:{IdCountry: idCountry}}).then(arrCountry => res.send(arrCountry))      
    }
    if (idCity != undefined) {
      activity.findAll({raw: true, where:{IdCity: idCity}}).then(arrCity => res.send(arrCity))      
    }
  }

  show(req, res, next) {
    var id = req.params.slug;
    activity.findAll({raw: true, where:{IdActivity: id}}).then(arrActivity => res.send(arrActivity))
    // sql.connect(sqlConfig, function (err) {
    //   if (err) console.log(err);

    //   var re = new sql.Request();
    //   re.query(
    //     "select * from activity where IdActivity =" + id,
    //     function (err, result) {
    //       if (err) console.log(err);
    //       res.send(result.recordset);
    //     }
    //   );
    // });

  }

  city(req, res) {
    city.findAll({raw: true}).then(arrCity => res.send(arrCity))
    // sql.connect(sqlConfig, function (err) {
    //   if (err) console.log(err);

    //   var re = new sql.Request();
    //   re.query("select * from City", function (err, result) {
    //     if (err) console.log(err);
    //     res.send(result.recordset);
    //   });
    // });
  }

  country(req, res) {
    country.findAll({raw: true}).then(arrCountry => res.send(arrCountry))
    // sql.connect(sqlConfig, function (err) {
    //   if (err) console.log(err);
    //   var re = new sql.Request();
    //   re.query("select * from country", function (err, result) {
    //     if (err) console.log(err);
    //     res.send(result.recordset);
    //   });
    // });
  }
  favourite(req, res) {
    var IdActivity = req.body.IdActivity;
    var idCustomer = req.body.idCustomer;
    var idFavaurite = req.body.idFavaurite;
    console.log(req.body);
    console.log(IdActivity, idCustomer, idFavaurite);

    favourite.create({
      IdFavourite: idFavaurite,
      IdCustomer:idCustomer,
      IdActivity: IdActivity
    })
    
    // sql.connect(sqlConfig, (err) => {
    //   if (err) console.log(err);
    //   var re = new sql.Request();
    //   var insertFavaurite = `insert into favourite (IdFavourite, IdCustomer, IdActivity) values('${idFavaurite}', '${idCustomer}','${IdActivity}')`;
    //   re.query(insertFavaurite, function (err, result) {
    //     if (err) console.log(err);
    //     console.log(result);
    //   });
    // });
  }

  getFavourite(req, res) {
    favourite.findAll({raw: true}).then(arrFavourite => res.send(arrFavourite))

    // sql.connect(sqlConfig, function (err) {
    //   if (err) console.log(err);
    //   var re = new sql.Request();
    //   re.query("select * from favourite", function (err, result) {
    //     if (err) console.log(err);
    //     res.send(result.recordset);
    //   });
    // });
  }

 

  deleteFavourite(req, res) {  
    var id = req.params.id;
    favourite.destroy({where: {IdActivity: id}})

    // console.log(id);
    // sql.connect(sqlConfig, (err) => {
    //   if (err) console.log(err);
    //   var re = new sql.Request();

    //   var deleteFavaurite = `delete from favourite  where IdActivity = '${id}'`;
    //   re.query(deleteFavaurite, function (err, result) {
    //     if (err) console.log(err);
    //     console.log(result);
    //   });
    // });
  }

  keysearch(req, res) {
    keysearch.findAll({raw:true}).then(arrKeySearch => res.send(arrKeySearch));
    // sql.connect(sqlConfig, function (err) {
    //   if (err) console.log(err);

    //   var re = new sql.Request();
    //   re.query("select * from keysearch", function (err, result) {
    //     if (err) console.log(err);
    //     res.send(result.recordset);
    //   });
    // });
  }
  
  async getkeysearch(req, res) {
    var key =  req.query.q;
    await keysearch.create({
      IdSearch: shortid.generate(),
      IdCustomer: '1',
      keyword: key
    })
    res.json({
      status: "ok"
    })
    // sql.connect(sqlConfig, function (err) {
    //   var re = new sql.Request();
    //   var insertkey = `insert into keysearch values ('${shortid.generate()}', '1', '${
    //     req.query.q
    //   }')`;
    //   re.query(insertkey, function (err, result) {
    //     if (err) console.log(err);
    //   });
    // });
  }

  image(req, res) {
    image.findAll({raw: true}).then(arrImage => res.send(arrImage))
    // sql.connect(sqlConfig, function (err) {
    //   if (err) console.log(err);
    //   var re = new sql.Request();
    //   var getschedule = `select * from Image`;
    //   re.query(getschedule, function (err, result) {
    //     if (err) console.log(err);
    //     res.send(result.recordset);
    //   });
    // });
  }

  imageId(req, res) {
    var id = req.params.id;
    image.findAll({raw: true, where: {IdActivity : id}}).then(arrImage => res.send(arrImage))
    // sql.connect(sqlConfig, function (err) {
    //   if (err) console.log(err);
    //   var re = new sql.Request();
    //   var getschedule = `select * from image where IdActivity = '${id}' `;
    //   re.query(getschedule, function (err, result) {
    //     if (err) console.log(err);
    //     res.send(result.recordset);
    //   });
    // });
  }

  schedule(req, res) {
    schedule.findAll({raw: true}).then(arrSchedule => res.send(arrSchedule))
    // sql.connect(sqlConfig, function (err) {
    //   if (err) console.log(err);
    //   var re = new sql.Request();
    //   var getschedule = `select * from schedule`;
    //   re.query(getschedule, function (err, result) {
    //     if (err) console.log(err);
    //     res.send(result.recordset);
    //   });
    // });
  }

  scheduleID(req, res) {
    var id = req.params.id;
    schedule.findAll({raw: true, where: {IdActivity : id}}).then(arrSchedule => res.send(arrSchedule))
    // sql.connect(sqlConfig, function (err) {
    //   if (err) console.log(err);
    //   var re = new sql.Request();
    //   var getschedule = `select * from schedule where IdActivity = '${id}' `;
    //   re.query(getschedule, function (err, result) {
    //     if (err) console.log(err);
    //     res.send(result.recordset);
    //   });
    // });
  }

  async booking(req, res) {
    const { customerDetail } = req.body[0];
    const {booking} = req.body[1];
    var idDetail = customerDetail.idDetail;
    var idBooking = booking.idBooking;
    var customerName = customerDetail.customerName;
    var cusPhoneNum = customerDetail.cusPhoneNum;
    cusPhoneNum = cusPhoneNum.toString();
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

    await book.create({
      IdBooking: idBooking,
      IdSchedule: idSchedule,
      IdCustomer:idCustomer,
      IdVoucher: idVoucher,
      PaymentOption: paymentOption,
      BookingTime: "",
      Total: total,
      SttBooking: sttBooking,
      AmountPeople:amountPeople,
      Discount: "",
    })

    await customer.create({
      IdDetail: idDetail,
      IdBooking: idBooking,
      CustomerName: customerName,
      CusPhoneNum: cusPhoneNum,
      EmailCus: emailCus,
      Gender: "nam"
    })

    res.json({
      status: "ok",
    });
    // sql.connect(sqlConfig, (err) => {
    //   if(err) console.log(err)

    //   var re = new sql.Request();
    //   //add booking
    //   var inserBooking = `insert into Booking (IdBooking, IdSchedule, IdCustomer, IdVoucher, PaymentOption, BookingTime, Total, SttBooking, AmountPeople,Discount) values 
    //   ('${idBooking}', '${idSchedule}','${idCustomer}','${idVoucher}' , '${paymentOption}', '', '${total}',${sttBooking}, ${amountPeople}, '')`

    //   re.query(inserBooking, function (err, result) {
    //     if (err) console.log(err);
    //     console.log(result);
    //   });
    //   //add customer
    //   var insertCustomerDetail = `insert into CusDetail (IdDetail, IdBooking, CustomerName, CusPhoneNum, EmailCus) values('${idDetail}','${idBooking}',N'${customerName}','${cusPhoneNum}','${emailCus}')`
    //   // console.log(insertCustomerDetail);
    //   re.query(insertCustomerDetail, function (err, result) {
    //     if (err) console.log(err);
    //     console.log(result);
    //   });
    // })
  }
}

module.exports = new ApiController();
