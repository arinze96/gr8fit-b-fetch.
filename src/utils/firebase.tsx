
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
import { envdata } from "../../envData";
const firebaseConfig = {
  apiKey: envdata.FIREBASE_API_KEY,
  authDomain: envdata.AUTH_DOMAIN,
  projectId: envdata.PROJECT_ID,
  storageBucket: envdata.STORAGE_BUCKET,
  messagingSenderId: envdata.MESSAGING_SENDER_ID,
  appId: envdata.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export { database };