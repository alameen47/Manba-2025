import admin from '../../lib/firebaseAdmin';
import { serialize } from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // This is a simplified login. A real app would get an ID token from the client,
    // verify it with admin.auth().verifyIdToken(idToken), and then create the session cookie.
    const { email, password } = req.body;

    // SIMULATED LOGIN FOR DEMONSTRATION
    // Replace this with actual Firebase Auth verification
    if (email === 'admin@example.com' && password === 'adminpass') {
      const token = 'fake-session-token'; // In reality, this would be a JWT or similar

      const cookie = serialize('session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      res.setHeader('Set-Cookie', cookie);
      return res.status(200).json({ success: true, message: 'Logged in successfully.' });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials.' });
  } else if (req.method === 'DELETE') { // For logout
      const cookie = serialize('session', '', {
        maxAge: -1, // Expire the cookie immediately
        path: '/',
      });

      res.setHeader('Set-Cookie', cookie);
      return res.status(200).json({ success: true, message: 'Logged out successfully.' });
  } else {
    res.setHeader('Allow', ['POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
