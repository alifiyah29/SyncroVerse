export default function handler(req, res) {
    if (req.method === 'GET') {
      // Return placeholder document data
      res.status(200).json({
        documents: [
          { id: 1, title: 'Document 1', content: 'Content for document 1' },
          { id: 2, title: 'Document 2', content: 'Content for document 2' },
        ],
      });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  