const shortid = require("shortid");
const {activity, image, city, country, type} = require('../configDb');
class FormController {
  async index(req, res) {
    var rederCountry, rederCity, renderType = []
    await country.findAll({raw:true}).then(arrCountry => rederCountry = arrCountry )
    await city.findAll({raw:true}).then(arrCity => rederCity = arrCity)
    await type.findAll({raw:true}).then(arrType => renderType = arrType)
    
    res.render("forms", { nuoc: rederCountry, thanhpho: rederCity, type: renderType })
  }

  async testpost(req, res) {
    const idpartner = "30";
    const nuoc = req.body.nuoc;
    const thanhpho = req.body.thanhpho;
    const type = req.body.type;
    const name = req.body.nameactivity;
    const place = req.body.place;
    const strprice = req.body.price;
    const stramount = req.body.amount;
    const strstt = req.body.stt;

    const desc = req.body.desc;
    const idactivity = req.body.idactivity;

//add db acttivity
    await activity.create({
      IdActivity: idactivity,
      IdCountry: nuoc,
      IdCity: thanhpho,
      IdPartner: idpartner,
      idtype: type,
      ActivityName: name,
      Location: place,
      Amount: stramount,
      Stt: strstt,
      Price: strprice,
      Desr: desc,
      imageUrl: req.body.links[0]      
    }).then(activity => {
      console.log(activity.get({plain:true}))     
    })
    .catch(err => console.log(err))

    // add db image
    var arrImage = []
    for (var i = 1; i < req.body.links.length; i++) {
        var itemArrImage = {}
        itemArrImage.IdImage = shortid.generate()
        itemArrImage.IdActivity = idactivity
        itemArrImage.Link = req.body.links[i]
        arrImage.push(itemArrImage)
    }
    await image.bulkCreate(
      arrImage
    ).then(arrImg => arrImg.forEach(element => {
      console.log(element.get({plain: true}));
    }))

    //select all activity
    activity.findAll({raw: true})
    .then(arrActivity => {
      res.render("tables", { activity: arrActivity });
    })
  }
}

module.exports = new FormController();
