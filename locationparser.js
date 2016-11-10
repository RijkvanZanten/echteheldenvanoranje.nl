const mysql = require('mysql');
const request = require('request');

const connection = mysql.createConnection({
  host: '37.139.22.73',
  user: 'rijk',
  password: 'Gj47M8+6Mt+nt33E+3{%cs2J;DqZ',
  database: 'echteheldenvanoranje'
});

connection.connect();

let placeNames = [];

console.log('💩');
connection.query('SELECT place_of_birth FROM persoon GROUP BY place_of_birth;', (err, res) => {
  if(err) throw err;

  res.forEach((record, i) => {
    console.log(`[${i}/${res.length}] (birth) insert into name array`);
    placeNames.push(record.place_of_birth);
  });

  connection.query('SELECT place_of_death FROM persoon GROUP BY place_of_death;', (err, res) => {
    if(err) throw err;

    res.forEach((record, i) => {
      console.log(`[${i}/${res.length}] (deaths) insert into name array`);
      if(placeNames.indexOf(record.place_of_death) === -1) placeNames.push(record.place_of_death);
    });

    console.log('CONVERT TO ARRAY OF OBJECTS');

    placeNames = placeNames.map((name) => {
      return {
        name,
        latlng: ''
      };
    });

    placeNames.forEach((placeObj, i) => {
      const res = request('http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(placeObj.name), (err, res, body) => {
        if(err) {
          console.log(`${i} ${err}`);
        } else {
          body = JSON.parse(body);
          if(body.results.length != 0) {
            console.log(`${i} performing query`);
            connection.query(`UPDATE persoon SET place_of_birth_latlong="${body.results[0].geometry.location.lat},${body.results[0].geometry.location.lng}" WHERE place_of_birth="${placeObj.name}";`, (err, res) => {
              if(err) console.log(err);
            });

            connection.query(`UPDATE persoon SET place_of_death_latlong="${body.results[0].geometry.location.lat},${body.results[0].geometry.location.lng}" WHERE place_of_death="${placeObj.name}";`, (err, res) => {
              if(err) console.log(err);
            });
          } else {
            console.log(`${i} not found`);
          }
        }
      });
    });
  });
});
