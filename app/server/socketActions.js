import socket from 'socket.io';

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
