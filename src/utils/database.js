import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

let firebase =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0];

export default firebase;
