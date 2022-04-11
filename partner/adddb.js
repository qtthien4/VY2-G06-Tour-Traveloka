var sqlConfig = require('./calldb');
const sql = require('mssql/msnodesqlv8')

var country = [
  {
    geoId: '30002585',
    geoName: 'Siem Reap',
    geoNameEN: 'Siem Reap',
    geoType: 'REGION',
    link: {
      type: 'DESTINATION_PAGE',
      experienceId: null,
      searchSpec: [Object],
      countryNameEN: 'Cambodia',
      itemNameEN: 'Siem Reap'
    },
    itemType: 'GEO_REGION',
    childDestinationFilters: [ [Object], [Object], [Object], [Object], [Object] ]
  },
  {
    geoId: '30002565',
    geoName: 'Phnom Penh',
    geoNameEN: 'Phnom Penh',
    geoType: 'REGION',
    link: {
      type: 'DESTINATION_PAGE',
      experienceId: null,
      searchSpec: [Object],
      countryNameEN: 'Cambodia',
      itemNameEN: 'Phnom Penh'
    },
    itemType: 'GEO_REGION',
    childDestinationFilters: [ [Object] ]
  },
  {
    geoId: '30002571',
    geoName: 'Kampong Thom',
    geoNameEN: 'Kampong Thom',
    geoType: 'REGION',
    link: {
      type: 'DESTINATION_PAGE',
      experienceId: null,
      searchSpec: [Object],
      countryNameEN: 'Cambodia',
      itemNameEN: 'Kampong Thom'
    },
    itemType: 'GEO_REGION',
    childDestinationFilters: [ [Object] ]
  }
]

  sql.connect(sqlConfig, function (err) {
    if (err)
      console.log(err);

    for(var i = 0 ; i< country.length; i++){
      var insert = `insert into City (IdCity, CityName) values ('${country[i].geoId}', N'${country[i].geoName}')`
       var re = new sql.Request();        
        re.query(insert, function (err, result) {
          if (err)
            console.log(err);
          console.log(result);
        });
    
    console.log(insert);
    }
  })



 