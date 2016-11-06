import socket from 'socket.io';
import mysql from 'mysql';

import { setTotals } from '../common/actions/totals';

const connection = mysql.createConnection({
  host: '37.139.22.73',
  user: 'rijk',
  password: 'Gj47M8+6Mt+nt33E+3{%cs2J;DqZ',
  database: 'echteheldenvanoranje'
});

connection.connect((err) => {
  if(err) console.log(err);
});

const listen = function(app) {
  const io = socket.listen(app);

  io.on('connection', (socket) => {
    socket.on('action', (action) => {
      switch(action.type) {
        case 'GET_TOTALS':
          connection.query('SELECT death_year, death_month, COUNT(*) as count FROM persoon GROUP BY death_year, death_month;', (err, res) => {
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
      }
    });
  });
};

export default listen;
