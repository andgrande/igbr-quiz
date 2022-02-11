import admin from 'firebase-admin';

const serviceAccount = "path/to/serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
