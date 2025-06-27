import admin from '../../lib/firebaseAdmin';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = admin.firestore();

    try {
      const { name, email, message } = req.body;

      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
          return res.status(400).json({ error: 'Invalid email format.' });
      }

      const contactSubmission = {
        name,
        email,
        message,
        submittedAt: new Date().toISOString(),
        read: false, // Useful for tracking in an admin panel
      };

      await db.collection('contactSubmissions').add(contactSubmission);

      res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });

    } catch (error) {
      console.error('Error in /api/contact:', error);
      res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
