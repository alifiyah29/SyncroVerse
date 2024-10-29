const mongoose = require('mongoose');

const documentVersionSchema = new mongoose.Schema({
  document: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  versionNumber: { type: Number, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DocumentVersion', documentVersionSchema);
