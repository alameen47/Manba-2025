import admin from '../../lib/firebaseAdmin';

export default async function handler(req, res) {
  const db = admin.firestore();

  if (req.method === 'GET') {
    try {
      const snapshot = await db.collection('blog').orderBy('createdAt', 'desc').get();
      const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts.' });
    }
  } else if (req.method === 'POST') {
    // Note: In a real application, protect this route.
    // Check for a verified user token and admin claim.
    // const { idToken } = req.body;
    // admin.auth().verifyIdToken(idToken).then(decodedToken => { ... });

    try {
      const { title, content, author, imageUrl } = req.body;
      if (!title || !content || !author) {
        return res.status(400).json({ error: 'Missing required fields.' });
      }

      const newPost = {
        title,
        content,
        author,
        imageUrl: imageUrl || null,
        createdAt: new Date().toISOString(),
      };

      const docRef = await db.collection('blog').add(newPost);
      res.status(201).json({ id: docRef.id, ...newPost });

    } catch (error) {
      res.status(500).json({ error: 'Failed to create post.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
