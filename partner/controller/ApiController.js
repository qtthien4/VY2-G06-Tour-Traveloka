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
  }

  city(req, res) {
    city.findAll({raw: true}).then(arrCity => res.send(arrCity))
  }

  country(req, res) {
    country.findAll({raw: true}).then(arrCountry => res.send(arrCountry))
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
  }

  getFavourite(req, res) {
    favourite.findAll({raw: true}).then(arrFavourite => res.send(arrFavourite))
  }
  
  deleteFavourite(req, res) {  
    var id = req.params.id;
    favourite.destroy({where: {IdActivity: id}})
  }

  keysearch(req, res) {
    keysearch.findAll({raw:true}).then(arrKeySearch => res.send(arrKeySearch));
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
  }

  image(req, res) {
    image.findAll({raw: true}).then(arrImage => res.send(arrImage))
  }

  imageId(req, res) {
    var id = req.params.id;
    image.findAll({raw: true, where: {IdActivity : id}}).then(arrImage => res.send(arrImage))
  }

  schedule(req, res) {
    schedule.findAll({raw: true}).then(arrSchedule =>
      {
        res.send(arrSchedule)
        // console.log(arrSchedule)
      }
    )
  }

  scheduleID(req, res) {
    var id = req.params.id;
    schedule.findAll({raw: true, where: {IdActivity : id}}).then(arrSchedule => res.send(arrSchedule))
  }

  async booking(req, res) {
    //console.log(req.body)
    const { customerDetail } = req.body[0];
    const {booking} = req.body[1];
    var idDetail = customerDetail.idDetail;
    var idBooking = booking.idBooking;
    var customerName = customerDetail.customerName;
    var cusPhoneNum = customerDetail.cusPhoneNum;
    cusPhoneNum = cusPhoneNum.toString();
    var emailCus = customerDetail.emailCus;
    //var gender = customerDetail.emailCus;

    var idSchedule = booking.idSchedule;
    var idCustomer = booking.idCustomer;
    var idVoucher = booking.idVoucher;
    var paymentOption = booking.paymentOption;

    var sttBooking = booking.sstBooking;   
    var amountPeople = booking.amountPeople;
    var total = booking.total;

    await book.create({
      IdBooking: idBooking,
      IdSchedule: idSchedule,
      IdCustomer:idCustomer,
      IdVoucher: idVoucher,
      PaymentOption: paymentOption,
      BookingTime: "",
      Total: total,
      Reduce: "",
      SttBooking: sttBooking,
      AmountPeople:amountPeople,
      IdPayment: "",
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
  }
}

module.exports = new ApiController();
