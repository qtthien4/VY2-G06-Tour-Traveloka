const sqlConfig = require("../calldb");
const sql = require("mssql/msnodesqlv8");
const shortid = require("shortid");
class DetailActivityController {
  index(req, res) {
    const idActivity = req.query.idactivity;
    var activity, image;
    const idschedule = req.query.idschedule;
    if (idschedule == undefined) {
      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        var re = new sql.Request();
        var queryactivity = `select * from activity where IdActivity = '${idActivity}'`;
        var queryimage = `select * from image where IdActivity = '${idActivity}'`;
        re.query(queryactivity, function (err, result) {
          if (err) console.log(err);
          activity = result.recordset;
          activity[0].IdActivity = activity[0].IdActivity.trim();
          re.query(queryimage, function (err, result) {
            if (err) console.log(err);
            image = result.recordset;
            image[0].active = "active";
            var queryschedule = `select * from schedule where IdActivity = '${idActivity}'`;
            re.query(queryschedule, function (err, result) {
              if (err) console.log(err);
              var schedule = result.recordset;
              for (var i = 0; i < schedule.length; i++) {
                schedule[i].count = i + 1;
                schedule[i].IdActivity = schedule[i].IdActivity.trim();
              }
              console.log(activity);
              if (activity[0].Stt == true) {
                res.render("detailactivity", {
                  activity: activity,
                  image: image,
                  schedule: schedule,
                  stt: ["Bật hoạt động"],
                });
              } else {
                res.render("detailactivity", {
                  activity: activity,
                  image: image,
                  schedule: schedule,
                  stt: ["Dừng hoạt động"],
                });
              }
            });
          });
        });
      });
    } else {
      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        var re = new sql.Request();
        var deleteschedule = `delete from schedule where IdSchedule = '${idschedule}'`;
        var queryactivity = `select * from activity where IdActivity = '${idActivity}'`;
        var queryimage = `select * from image where IdActivity = '${idActivity}'`;
        re.query(deleteschedule, function (err, result) {
          if (err) console.log(err);
          console.log(result);
          re.query(queryactivity, function (err, result) {
            if (err) console.log(err);
            activity = result.recordset;
            activity[0].IdActivity = activity[0].IdActivity.trim();
            re.query(queryimage, function (err, result) {
              if (err) console.log(err);
              image = result.recordset;
              image[0].active = "active";
              var queryschedule = `select * from schedule where IdActivity = '${idActivity}'`;
              re.query(queryschedule, function (err, result) {
                if (err) console.log(err);
                var schedule = result.recordset;
                for (var i = 0; i < schedule.length; i++) {
                  schedule[i].count = i + 1;
                  schedule[i].IdActivity = schedule[i].IdActivity.trim();
                }
                res.render("detailactivity", {
                  activity: activity,
                  image: image,
                  schedule: schedule,
                });
              });
            });
          });
        });
      });
    }
  }
  postTime(req, res) {
    var starttime = req.body.timestart;
    var endtime = req.body.timeend;
    const idActivity = req.query.idactivity;
    if (starttime != undefined) {
      var activity, image;

      //handle time start
      var b = starttime.slice(2).split("T");
      var a = b[0].split("-");
      var temp = a[0];
      a[0] = a[2];
      a[2] = temp;
      var handletimestart = a.join("-") + " " + b[1];

      //handle time end
      var b = endtime.slice(2).split("T");
      var a = b[0].split("-");
      var temp = a[0];
      a[0] = a[2];
      a[2] = temp;
      var handletimeend = a.join("-") + " " + b[1];

      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        var re = new sql.Request();
        var queryactivity = `select * from activity where IdActivity = '${idActivity}'`;
        var queryimage = `select * from image where IdActivity = '${idActivity}'`;
        var insertschedule = `insert into schedule (IdSchedule, IdActivity, StartTime, EndTime) values('${shortid.generate()}','${idActivity}', convert(date,'${handletimestart}',5), convert(date,'${handletimeend}',5)) `;
        re.query(queryactivity, function (err, result) {
          if (err) console.log(err);
          activity = result.recordset;
          re.query(queryimage, function (err, result) {
            if (err) console.log(err);
            image = result.recordset;
            image[0].active = "active";
            re.query(insertschedule, function (err, result) {
              if (err) console.log(err);

              if (starttime > endtime) {
                res.render("detailactivity", {
                  activity: activity,
                  image: image,
                  err: ["thời gian bắt đầu phải nhỏ hơn thời gian kết thúc"],
                });
              } else {
                var queryschedule = `select * from schedule where IdActivity = '${idActivity}'`;
                re.query(queryschedule, function (err, result) {
                  if (err) console.log(err);
                  var schedule = result.recordset;
                  for (var i = 0; i < schedule.length; i++) {
                    schedule[i].count = i + 1;
                  }
                  res.render("detailactivity", {
                    activity: activity,
                    image: image,
                    err: err,
                    schedule: schedule,
                  });
                });
              }
            });
          });
        });
      });
    } else {
      var ActivityName = req.body.ActivityName;
      var Location = req.body.Location;
      var Amount = req.body.Amount;
      var Price = req.body.Price;
      var desc = req.body.desc;
      const idActivity = req.query.idactivity;

      sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        var re = new sql.Request();
        var queryactivity = `select * from activity where IdActivity = '${idActivity}'`;
        var queryimage = `select * from image where IdActivity = '${idActivity}'`;
        var updateactivity = `UPDATE Activity SET ActivityName = N'${ActivityName}', Location= '${Location}', Amount= ${Amount}, Price= ${Price}, Desr= N'${desc}' WHERE IdActivity = '${idActivity}'`;
        //var updateactivity =  `UPDATE Activity SET ActivityName = N'cái gì chời' where IdActivity = 'Z1jF9u4BW'`
        re.query(updateactivity, function (err, result) {
          if (err) console.log(err);
          re.query(queryactivity, function (err, result) {
            if (err) console.log(err);
            activity = result.recordset;
            re.query(queryimage, function (err, result) {
              if (err) console.log(err);
              image = result.recordset;
              image[0].active = "active";

              var queryschedule = `select * from schedule where IdActivity = '${idActivity}'`;
              re.query(queryschedule, function (err, result) {
                if (err) console.log(err);
                var schedule = result.recordset;
                for (var i = 0; i < schedule.length; i++) {
                  schedule[i].count = i + 1;
                }
                res.render("detailactivity", {
                  activity: activity,
                  image: image,
                  err: err,
                  schedule: schedule,
                });
              });
            });
          });
        });
      });
    }
  }
}

module.exports = new DetailActivityController();
