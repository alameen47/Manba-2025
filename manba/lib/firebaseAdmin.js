import * as admin from 'firebase-admin';

// IMPORTANT: The service account key should be stored securely as an environment variable, NOT in the codebase.
// 1. Go to your Firebase project settings > Service accounts.
// 2. Generate a new private key and download the JSON file.
// 3. Encode the contents of the JSON file to base64.
// 4. Store the base64 string in your .env.local file as FIREBASE_SERVICE_ACCOUNT_KEY.

try {
  if (!admin.apps.length) {
    const serviceAccount = JSON.parse(
      Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, 'base64').toString('utf-8')
    );

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
} catch (error) {
  console.error('Firebase admin initialization error', error.stack);
}

export default admin;
