const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  googleId: { type: String, unique: true },
  role: { type: String, enum: ['admin', 'editor', 'viewer'], default: 'viewer' }, // Add role field
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);