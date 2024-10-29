const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const documentRoutes = require('./routes/document'); // Import document routes
const http = require('http');
const socketIo = require('socket.io');

// Load environment variables and passport configuration
dotenv.config();
require('./config/passport');

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = socketIo(server); // Initialize Socket.io
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// OAuth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); // Redirect to frontend after successful login
  }
);

// Use document routes
app.use('/api/documents', documentRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('CollabConnect Backend is running');
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle document update events
  socket.on('documentUpdated', (data) => {
    // Broadcast the update to other connected clients
    socket.broadcast.emit('documentUpdated', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
