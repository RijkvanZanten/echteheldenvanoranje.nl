import socket from 'socket.io';
import mysql from 'mysql';
import DirectusSDKClient from 'node-directus-client';

import { setTotals } from '../common/actions/totals';
import { setLocal } from '../common/actions/people';
import { setEvents } from '../common/actions/events';
import { setDefaultEvents } from '../common/actions/defaultEvents';

const client = new DirectusSDKClient('kzwKSubHZKdMZ42q2hDZqSQ0PtQ9jcSQ', {
  baseUrl: 'http://cms.verledenverteld.nl/api/'
});

const connection = mysql.createConnection({
  host: '37.139.22.73',
  user: 'rijk',
  password: 'Gj47M8+6Mt+nt33E+3{%cs2J;DqZ',
  database: 'echteheldenvanoranje'
});

connection.connect();

const listen = function(app) {
  const io = socket.listen(app);

  io.on('connection', (socket) => {
    socket.on('action', (action) => {
      switch(action.type) {
        case 'GET_LOCAL':
          connection.query(`SELECT * FROM persoon WHERE death_year="1941" AND place_of_birth="${action.location}" OR place_of_death="${action.location}";`, (err, res) => {
            if(err) throw err;

            const formattedData = {};
            res.forEach((d) => {
              formattedData[d.id] = {
                ...d,
                categories: d.categories.split(','),
                place_of_birth_latlong: d.place_of_birth_latlong ? d.place_of_birth_latlong.split(',') : [],
                place_of_death_latlong: d.place_of_death_latlong ? d.place_of_death_latlong.split(',') : []
              };
            });

            socket.emit('action', setLocal(formattedData, action.location));
          });
          break;

        case 'GET_EVENTS':
          client.getEntries('Gebeurtenis', (err, res) => {
            if(err) throw err;

            socket.emit('action', setEvents(res.rows.map((d) => {
              const dateArray = d.Datum.match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)\:(\d+)$/);
              return {
                ...d,
                Datum: new Date(dateArray[1], dateArray[2] - 1, dateArray[3], dateArray[4], dateArray[5], dateArray[6]),
                Location: d.Location.split(','),
                Categories: d.Categories.split(','),
                Person_category: d.Person_category.split(',')
              };
            })));
          });
          break;

        case 'GET_DEFAULT_EVENTS':
          client.getEntries('Categories', (err, res) => {
            if(err) throw err;
            socket.emit('action', setDefaultEvents(res.rows));
          });
          break;
      }
    });
  });
};

export default listen;
