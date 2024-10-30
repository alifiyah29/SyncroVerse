// socket.js
const { Server } = require('socket.io');

let io;

const init = (server) => {
  // Initialize Socket.io with CORS for frontend access
  io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000', // Update if your frontend runs on a different URL or port
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for 'editDocument' events for real-time collaboration
    socket.on('editDocument', (data) => {
      console.log('Document updated:', data);
      socket.broadcast.emit('documentUpdated', data); // Broadcast changes to all other clients
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
};

// Function to access the `io` instance after initialization
const getIo = () => {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
};

module.exports = { init, getIo };
