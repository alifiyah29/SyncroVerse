const express = require('express');
const Document = require('../models/Document');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Create a new document (only for admin and editor)
router.post('/', roleMiddleware(['admin', 'editor']), async (req, res) => {
  const { title, content } = req.body;
  const document = new Document({ title, content, owner: req.user._id });
  await document.save();
  res.status(201).json(document);
});

// Get all documents (viewable by all authenticated users)
router.get('/', async (req, res) => {
  const documents = await Document.find();
  res.json(documents);
});

// Other routes can be added similarly...

module.exports = router;
