const shortid = require("shortid");
const axios = require("axios");

const {
  activity,
  country,
  city,
  favourite,
  keysearch,
  image,
  schedule,
  book,
  customer,
  user,
} = require("../configDb");

class ApiController {
  index(req, res) {}

  RegisterUser(req, res) {
    var info = req.body;
    var IdCustomer = info.IdCustomer;
    var Name = info.Name;
    var Phone = info.Phone;
    var email = info.email;
    var gender = info.gender;
    var point = 0;
    var password = info.password;

    user
      .create({
        IdCustomer,
        Name,
        Phone,
        email,
        gender,
        point,
        password,
      })
      .then((user) => {
        console.log(user.get({ plain: true }));
      })
      .catch((err) => console.log(err));

    res.json({
      status: "ok",
    });
  }

  tour(req, res) {
    var idCountry = req.query.IdCountry;
    var idCity = req.query.idCity;

    if (idCountry == undefined && idCity == undefined) {
      activity
        .findAll({ raw: true })
        .then((arrActivity) => res.send(arrActivity));
    }
    if (idCountry != undefined) {
      activity
        .findAll({ raw: true, where: { IdCountry: idCountry } })
        .then((arrCountry) => res.send(arrCountry));
    }
    if (idCity != undefined) {
      activity
        .findAll({ raw: true, where: { IdCity: idCity } })
        .then((arrCity) => res.send(arrCity));
    }
  }

  show(req, res, next) {
    var id = req.params.slug;
    activity
      .findAll({ raw: true, where: { IdActivity: id } })
      .then((arrActivity) => res.send(arrActivity));
  }

  city(req, res) {
    city.findAll({ raw: true }).then((arrCity) => res.send(arrCity));
  }

  country(req, res) {
    country.findAll({ raw: true }).then((arrCountry) => res.send(arrCountry));
  }
  favourite(req, res) {
    var IdActivity = req.body.IdActivity;
    var idCustomer = req.body.idCustomer;
    var idFavaurite = req.body.idFavaurite;
    console.log(req.body);
    console.log(IdActivity, idCustomer, idFavaurite);

    favourite.create({
      IdFavourite: idFavaurite,
      IdCustomer: idCustomer,
      IdActivity: IdActivity,
    });
  }

  getFavourite(req, res) {
    favourite
      .findAll({ raw: true })
      .then((arrFavourite) => res.send(arrFavourite));
  }

  deleteFavourite(req, res) {
    var id = req.params.id;
    favourite.destroy({ where: { IdActivity: id } });
  }

  keysearch(req, res) {
    keysearch
      .findAll({ raw: true })
      .then((arrKeySearch) => res.send(arrKeySearch));
  }

  async getkeysearch(req, res) {
    var key = req.query.q;
    await keysearch.create({
      IdSearch: shortid.generate(),
      IdCustomer: "1",
      keyword: key,
    });
    res.json({
      status: "ok",
    });
  }

  image(req, res) {
    image.findAll({ raw: true }).then((arrImage) => res.send(arrImage));
  }

  imageId(req, res) {
    var id = req.params.id;
    image
      .findAll({ raw: true, where: { IdActivity: id } })
      .then((arrImage) => res.send(arrImage));
  }

  // schedule(req, res) {
  //   schedule.findAll({raw: true}).then(arrSchedule =>
  //     {
  //       res.send(arrSchedule)
  //       // console.log(arrSchedule)
  //     }
  //   )a
  // }

  async scheduleID(req, res) {
    var id = req.params.id;
    var arrSchedule = [];

    await schedule
      .findAll({ raw: true, where: { IdActivity: id } })
      .then((e) => {
        arrSchedule = e;
      });

    for (var i = 0; i < arrSchedule.length; i++) {
      var a = arrSchedule[i].StartTime;
      var timestart = new Date(a);
      console.log(timestart <= new Date());

      //   //check xem du so luong nguoi ch
      if (arrSchedule[i].AmountBooking == arrSchedule[i].Amount) {
        await schedule.update(
          { Status: 0 },
          { where: { IdSchedule: arrSchedule[i].IdSchedule } }
        );
      } else {
        await schedule.update(
          { Status: 1 },
          { where: { IdSchedule: arrSchedule[i].IdSchedule } }
        );
      }

      //     //check xem qua time ch
      if (timestart <= new Date()) {
        await schedule.update(
          { Status: 0 },
          { where: { IdSchedule: arrSchedule[i].IdSchedule } }
        );
      }
    }

    await schedule
      .findAll({ raw: true, where: { IdActivity: id, Status: true } })
      .then((e) => {
        res.send(e);
      });
  }

  async booking(req, res) {
    // console.log(req.body)
    if (req.body[0] != undefined) {
      const { customerDetail } = req.body[0];
      const { booking } = req.body[1];
      //booking
      var idBooking = booking.idBooking;
      var idSchedule = booking.idSchedule;
      var userLogin = booking.idCustomer;
      var idVoucher = booking.idVoucher;
      var idGift = booking.idGift;
      var paymentOption = booking.paymentOption;
      var bookingTime = booking.bookingTime;
      var total = booking.total.toString();
      var reduce = booking.reduce.toString();
      var sttBooking = booking.sstBooking.toString();
      var amountPeople = booking.amountPeople.toString();
      var idPayment = booking.IdPayment;

      //customerdetail
      var idDetail = customerDetail.idDetail;
      var customerName = customerDetail.customerName;
      var cusPhoneNum = customerDetail.cusPhoneNum;
      cusPhoneNum = cusPhoneNum.toString();
      var emailCus = customerDetail.emailCus;
      var gender = customerDetail.gender;

      const customerObj = await user.findOne({
        raw: true,
        where: { IdCustomer: userLogin },
        order: ["IdCustomer"],
      });
      var idCustomer = customerObj.IdCustomer;

      //inser db
      await book.create({
        IdBooking: idBooking,
        IdSchedule: idSchedule,
        IdCustomer: idCustomer,
        IdVoucher: idVoucher,
        IdGift: idGift,
        PaymentOption: paymentOption,
        BookingTime: bookingTime,
        Total: total,
        Reduce: reduce,
        SttBooking: sttBooking,
        AmountPeople: amountPeople,
        IdPayment: idPayment,
      });

      await customer.create({
        IdDetail: idDetail,
        IdBooking: idBooking,
        CustomerName: customerName,
        CusPhoneNum: cusPhoneNum,
        EmailCus: emailCus,
        Gender: gender,
      });
    }

    res.json({
      status: "ok",
    });
  }

  async bookingId(req, res) {
    var id = req.params.id;
    try {
      book
        .findAll({ raw: true, where: { IdBooking: id } })
        .then((arrActivity) => res.send(arrActivity));
    } catch (error) {
      console.log(error);
    }
  }

  //het time dat
  async endbooking(req, res) {
    // const endbooking = req.body.dataTimeoutPayment;
    const endbooking = req.body;

    var amountBooking = endbooking.amountBooking;
    var idBooking = endbooking.idBooking;
    var idSchedule = endbooking.idSchedule;

    await customer.destroy({ where: { IdBooking: idBooking } });
    await book.destroy({ where: { IdBooking: idBooking } });
    var scheduleObj = await schedule.findOne({
      raw: true,
      where: { IdSchedule: idSchedule },
      order: ["IdSchedule"],
    });

    var subtractAmount = scheduleObj.AmountBooking - amountBooking;
    await schedule.update(
      { AmountBooking: subtractAmount },
      { where: { IdSchedule: idSchedule } }
    );

    console.log(endbooking);

    res.json({ data: "oke" });
  }

  //lay thoong tin cua user (post)
  async Login(req, res) {
    var userLogin = req.body.user;
    // console.log(user)
    var infoUser = await user.findOne({
      raw: true,
      where: { email: userLogin },
      order: ["IdCustomer"],
    });

    if (infoUser == null) {
      res.json({ data: "user khong ton tai" });
    } else {
      res.send(infoUser);
    }
  }

  //update giữ chổ
  async Reservation(req, res) {
    const idSchedule = req.body.IdSchedule;

    const amountPeople = req.body.amount;

    var scheduleObj = await schedule.findOne({
      raw: true,
      where: { IdSchedule: idSchedule },
      order: ["IdSchedule"],
    });

    var amountBookingSchedule = scheduleObj.AmountBooking;
    var sumPeopel = parseInt(amountPeople) + parseInt(amountBookingSchedule);
    sumPeopel.toString();

    await schedule.update(
      {
        AmountBooking: sumPeopel,
        Status: 1,
      },
      { where: { IdSchedule: idSchedule } }
    );
    res.json({ data: "ok" });
  }

  //lay booking cuar user (post)
  async UserBooking(req, res) {
    var userLogin = req.body.user;

    var customer = await user.findOne({
      raw: true,
      where: { email: userLogin },
      order: ["IdCustomer"],
    });

    var idCustomer = customer.IdCustomer;

    var booking = await book.findAll({
      raw: true,
      where: { IdCustomer: idCustomer },
    });
    var idSchedule,
      arrBookingUser = [];

    for (var i = 0; i < booking.length; i++) {
      idSchedule = booking[i].IdSchedule;
      var objSchedule = await schedule.findOne({
        raw: true,
        where: { IdSchedule: idSchedule },
        order: ["IdSchedule"],
      });
      var objAcivity = await activity.findOne({
        raw: true,
        where: { IdActivity: objSchedule.IdActivity },
        order: ["IdActivity"],
      });
      var objBookingUser = {};
      objBookingUser.IdSchedule = objSchedule.IdSchedule;
      objBookingUser.ActivityName = objAcivity.ActivityName;
      objBookingUser.stt = booking[i].SttBooking;

      objBookingUser.ImageUrl = objAcivity.ImageUrl;
      objBookingUser.Price = objAcivity.Price;
      objBookingUser.reduce = booking[i].Reduce;
      objBookingUser.trangthai = booking[i].SttBooking;
      objBookingUser.handleStartTime = objSchedule.StartTime;
      objBookingUser.handleEndTime = objSchedule.EndTime;
      objBookingUser.voucher = booking[i].IdVoucher;
      objBookingUser.gift = booking[i].IdGift;
      objBookingUser.bookingTime = booking[i].BookingTime;
      objBookingUser.amountPeople = booking[i].AmountPeople;
      objBookingUser.idBooking = booking[i].IdBooking;

      arrBookingUser.push(objBookingUser);
    }

    res.send(arrBookingUser);
  }

  //api post payment
  async payment(req, res) {
    // console.log(req.body)
    var updateBooking = req.body.dataPayment;
    console.log(updateBooking);
    if (updateBooking.sttBooking == "success") {
      var idbooking = updateBooking.idBooking;
      var bookingTime = updateBooking.bookingTime;
      var idVoucher = updateBooking.idVoucher;
      var idGift = updateBooking.idGift;
      var reduce = updateBooking.reduce.toString();
      var idPayment = updateBooking.idPayment;
      //?
      var idUser = updateBooking.idCustomer;
      var point = updateBooking.score;
      //sstbooking

      await book.update(
        {
          IdVoucher: idVoucher,
          IdGift: idGift,
          BookingTime: bookingTime,
          Reduce: reduce,
          SttBooking: updateBooking.sttBooking,
          IdPayment: idPayment,
        },
        { where: { IdBooking: idbooking } }
      );

      //update theem cai soo luong da them
      //update điểm

      var userObj = await user.findOne({
        raw: true,
        where: { IdCustomer: idUser },
        order: ["IdCustomer"],
      });
      if (userObj != null) {
        var addPoint = userObj.point + point;
        await user.update(
          { point: addPoint },
          { where: { IdCustomer: idUser } }
        );
      }
    }

    res.json({ data: "ok" });
  }

  //hoan tien lai
  async refundBooking(req, res) {
    var idbooking = req.body.idPayment;
    var idSchedule = req.body.idSchedule;

    var time = new Date();
    const scheduleObj = await schedule.findOne({
      raw: true,
      where: { IdSchedule: idSchedule },
      order: ["IdSchedule"],
    });
    const bookObj = await book.findOne({
      raw: true,
      where: { IdBooking: idbooking },
      order: ["IdBooking"],
    });
    var timestart = new Date(scheduleObj.StartTime);

    if (timestart > time) {
      var idPayment = bookObj.IdPayment.trim();

      try {
        const refund = await axios(
          `https://api-m.sandbox.paypal.com/v2/payments/captures/${idPayment}/refund`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            auth: {
              username: process.env.PUCLIC_KEY_PAYPAL,
              password: process.env.SERECT_KEY_PAYPAL,
            },
          }
        );
        console.log("refund", refund.data);
      } catch (error) {
        console.log(error);
      }

      //console.log(refund.data);

      //doi trang thai
      await book.update(
        {
          SttBooking: "refund",
        },
        { where: { IdBooking: idbooking } }
      );

      //doi so luong dat
      await schedule.update(
        {
          AmountBooking: bookObj.AmountPeople,
        },
        { where: { IdSchedule: idSchedule } }
      );

      res.json({ data: "succes", code: 100 });
    } else {
      res.json({
        data: "fail",
        description: "Đã hết thời gian có thể hủy hoạt dồng",
        code: 111,
      });
    }
  }
}
module.exports = new ApiController();
