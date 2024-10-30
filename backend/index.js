const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const documentRoutes = require('./routes/document');
const http = require('http');
const { init } = require('./socket'); // Import `init` from socket.js

// Load environment variables and passport configuration
dotenv.config();
require('./config/passport');

const app = express();
const server = http.createServer(app); // Create HTTP server
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// OAuth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('http://localhost:3000/dashboard'); // Redirect to the dashboard after successful login
});

// Use document routes
app.use('/api/documents', documentRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('CollabConnect Backend is running');
});

// Initialize Socket.io with the server
init(server);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
