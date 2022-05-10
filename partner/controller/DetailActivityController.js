const sqlConfig = require("../calldb");
const sql = require("mssql/msnodesqlv8");
const shortid = require("shortid");
const {activity, image, schedule} = require('../configDb')
class DetailActivityController {
  async index(req, res) {
    const idActivity = req.query.idactivity;
    var objActivity,arrImage, arrSchedule;
    const idschedule = req.query.idschedule;
    if (idschedule == undefined) {     
      await activity.findOne({raw: true,where: {IdActivity : idActivity}, order:['IdActivity']}).then(e => objActivity = e)
      var arrActivity = [];
      arrActivity.push(objActivity);
      await image.findAll({raw:true, where: {IdActivity : idActivity}}).then(e => {
        arrImage = e
        arrImage[0].active = "active";
      })
      await schedule.findAll({raw:true, where: {IdActivity : idActivity}}).then(e => {
        arrSchedule = e
        for (var i = 0; i < arrSchedule.length; i++) {
          arrSchedule[i].count = i + 1;
          arrSchedule[i].IdActivity = arrSchedule[i].IdActivity.trim();
        }
      })
      if (objActivity.Stt == true) {
                res.render("detailactivity", {
                  activity: arrActivity,
                  image: arrImage,
                  schedule: arrSchedule,
                  stt: ["Dừng hoạt động"],
                });
      } else {
        res.render("detailactivity", {
          activity: arrActivity,
          image: arrImage,
          schedule: arrSchedule,
          stt: ["Bật hoạt động"],
        });
      }

    } else { 
      await schedule.destroy({where: {IdSchedule:idschedule}})
      await activity.findOne({raw: true,where: {IdActivity : idActivity}, order:['IdActivity']}).then(e => objActivity = e)
      var arrActivity = [];
      arrActivity.push(objActivity);
      await image.findAll({raw:true, where: {IdActivity : idActivity}}).then(e => {
        arrImage = e
        arrImage[0].active = "active";
      })
      await schedule.findAll({raw:true, where: {IdActivity : idActivity}}).then(e => {
        arrSchedule = e
        for (var i = 0; i < arrSchedule.length; i++) {
          arrSchedule[i].count = i + 1;
          arrSchedule[i].IdActivity = arrSchedule[i].IdActivity.trim();
        }
      })
      if (objActivity.Stt == true) {
        res.render("detailactivity", {
          activity: arrActivity,
          image: arrImage,
          schedule: arrSchedule,
          stt: ["Dừng hoạt động"],
        });
        } else {
        res.render("detailactivity", {
          activity: arrActivity,
          image: arrImage,
          schedule: arrSchedule,
          stt: ["Bật hoạt động"],
        });
        }
    }
  }
  async postTime(req, res) {
    var starttime = req.body.timestart;
    var endtime = req.body.timeend;
    const idActivity = req.query.idactivity;
    var objActivity,arrImage, arrSchedule;
    console.log(starttime);

    await activity.findOne({raw: true,where: {IdActivity : idActivity}, order:['IdActivity']}).then(e => objActivity = e)
      var arrActivity = [];
      arrActivity.push(objActivity);

    await image.findAll({raw:true, where: {IdActivity : idActivity}}).then(e => {
        arrImage = e
        arrImage[0].active = "active";
      })

    if (starttime != undefined) {
      if (starttime >= endtime) {
        res.render("detailactivity", {
          activity: arrActivity,
          image: arrImage,
          schedule: arrSchedule,
          err: ["thời gian bắt đầu phải nhỏ hơn thời gian kết thúc"],
        })}else{
          await schedule.create({
            IdSchedule: shortid.generate(),
            IdActivity :idActivity,
            StartTime: starttime,
            EndTime: endtime
          })
          await schedule.findAll({raw:true, where: {IdActivity : idActivity}}).then(e => {
            arrSchedule = e
            for (var i = 0; i < arrSchedule.length; i++) {
              arrSchedule[i].count = i + 1;
              arrSchedule[i].IdActivity = arrSchedule[i].IdActivity.trim();
            }
          })

          if (objActivity.Stt == true) {
            res.render("detailactivity", {
              activity: arrActivity,
              image: arrImage,
              schedule: arrSchedule,
              stt: ["Bật hoạt động"],
            });
          }else {
            res.render("detailactivity", {
              activity: arrActivity,
              image: arrImage,
              schedule: arrSchedule,
              stt: ["Dừng hoạt động"],
            });
            }
          }
    }
    else{
          var ActivityName = req.body.ActivityName;
          var Location = req.body.Location;
          var Amount = req.body.Amount;
          var Price = req.body.Price;
          var desc = req.body.desc;          
          activity.update({
            ActivityName: ActivityName,
            Location: Location,
            Amount: Amount,
            Price:Price,
            Desr : desc
          },{where: {IdActivity : idActivity}})

          if (objActivity.Stt == true) {
            res.render("detailactivity", {
              activity: arrActivity,
              image: arrImage,
              schedule: arrSchedule,
              stt: ["Dừng hoạt động"],
            });
          } else {
            res.render("detailactivity", {
              activity: arrActivity,
              image: arrImage,
              schedule: arrSchedule,
              stt: ["Bật hoạt động"],
            });
          }
        }
    }
}
module.exports = new DetailActivityController();
