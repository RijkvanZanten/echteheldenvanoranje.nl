import socket from 'socket.io';

const listen = function(app) {
  const io = socket.listen(app);

  io.on('connection', (socket) => {
    // socket actions
    socket.on('action', () => {
      socket.emit('action', 'hi there');
    });
  });
};

export default listen;
