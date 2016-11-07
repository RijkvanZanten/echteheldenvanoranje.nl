import socket from 'socket.io';
import mysql from 'mysql';
import DirectusSDKClient from 'node-directus-client';

import { setTotals } from '../common/actions/totals';
import { setLocal } from '../common/actions/people';
import { setEvents } from '../common/actions/events';

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
          connection.query(`SELECT * FROM persoon WHERE place_of_birth="${action.location}" AND death_year="1941";`, (err, res) => {
            if(err) throw err;

            const formattedData = {};
            res.forEach((d) => {
              formattedData[d.id] = {
                ...d,
                categories: d.categories.split(',')
              };
            });

            socket.emit('action', setLocal(formattedData, action.location));
          });
          break;

        case 'GET_TOTALS':
          connection.query('SELECT death_year, death_month, COUNT(*) as count FROM persoon WHERE death_year="1941" GROUP BY death_year, death_month;', (err, res) => {
            if(err) throw err;

            const totals = {
              '1940': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              '1941': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              '1942': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              '1943': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              '1944': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              '1945': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            };

            res.forEach((d) => {
              totals[d.death_year][Number(d.death_month) - 1] = d.count;
            });

            socket.emit('action', setTotals(totals));
          });
          break;

        case 'GET_EVENTS':
          client.getEntries('Gebeurtenis', (err, res) => {
            if(err) throw err;
            socket.emit('action', setEvents(res.rows.map((d) => {
              const dateArray = (d.Datum).match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)\:(\d+)$/);
              return {
                ...d,
                Datum: new Date(dateArray[1], dateArray[2] - 1, dateArray[3], dateArray[4], dateArray[5], dateArray[6])
              };
            })));
          });
          break;
      }
    });
  });
};

export default listen;
