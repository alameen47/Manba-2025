import admin from '../../lib/firebaseAdmin';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = admin.firestore();
    const { email } = req.body;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'A valid email is required.' });
    }

    try {
      const subscriptionsRef = db.collection('newsletterSubscriptions');
      const snapshot = await subscriptionsRef.where('email', '==', email).get();

      if (!snapshot.empty) {
        return res.status(409).json({ message: 'This email is already subscribed.' });
      }

      const newSubscription = {
        email,
        subscribedAt: new Date().toISOString(),
      };

      await subscriptionsRef.add(newSubscription);

      res.status(201).json({ success: true, message: 'Thank you for subscribing!' });

    } catch (error) {
      console.error('Error in /api/newsletter:', error);
      res.status(500).json({ error: 'Subscription failed. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
