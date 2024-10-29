export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      // Placeholder response for authentication
      if (email === 'user@example.com' && password === 'password') {
        res.status(200).json({ message: 'Login successful', user: { name: 'User Name', email } });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  