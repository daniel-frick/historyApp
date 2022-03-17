import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const env = import.meta.env
const firebaseConfig = {
  apiKey: env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.SNOWPACK_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.SNOWPACK_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.SNOWPACK_PUBLIC_FIREBASE_MEASUREMENT_ID
};









const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)