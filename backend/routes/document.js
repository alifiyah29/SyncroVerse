const express = require('express');
const Document = require('../models/Document');
const { getIo } = require('../socket'); // Use `getIo` instead of `io` directly
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', roleMiddleware(['admin', 'editor']), async (req, res) => {
  const { title, content } = req.body;
  const document = new Document({ title, content, owner: req.user._id });
  await document.save();
  res.status(201).json(document);
});

router.get('/', async (req, res) => {
  const documents = await Document.find();
  res.json(documents);
});

router.put('/:id', roleMiddleware(['admin', 'editor']), async (req, res) => {
  const { title, content } = req.body;
  const document = await Document.findByIdAndUpdate(
    req.params.id,
    { title, content, updatedAt: Date.now() },
    { new: true }
  );

  // Emit document update event
  const io = getIo();
  io.emit('documentUpdated', document);

  res.json(document);
});

module.exports = router;
