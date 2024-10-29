export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return placeholder chat messages
    res.status(200).json({
      messages: [
        { id: 1, text: 'Hello there!' },
        { id: 2, text: 'Welcome to the chat!' },
      ],
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
