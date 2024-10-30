const socketIo = require('socket.io');
let io;

// Initialize the Socket.io instance
function init(server) {
  io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('documentUpdated', (data) => {
      console.log('Document updated:', data);
      socket.broadcast.emit('documentUpdated', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
}

// Function to get the `io` instance after initialization
function getIo() {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
}

module.exports = { init, getIo };
