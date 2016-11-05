import socket from 'socket.io';
import DirectusSDKClient from 'node-directus-client';

const client = new DirectusSDKClient('kzwKSubHZKdMZ42q2hDZqSQ0PtQ9jcSQ', {
  baseUrl: 'http://cms.verledenverteld.nl/api/'
});

const listen = function(app) {
  const io = socket.listen(app);

  io.on('connection', (socket) => {
    socket.on('action', (action) => {
      switch(action.type) {
        case 'ACTION':
          socket.emit('ACTION', 'data');
      }
    });
  });
};

export default listen;
