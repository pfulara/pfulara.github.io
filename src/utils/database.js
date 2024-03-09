import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: "portfolio-44cf3.firebaseapp.com",
    databaseURL: "https://portfolio-44cf3.firebaseio.com",
    projectId: "portfolio-44cf3",
    storageBucket: "portfolio-44cf3.appspot.com",
    messagingSenderId: "180957930327",
    appId: "1:180957930327:web:68a9dd9e0e75069ee71412"
};

let firebase = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase;