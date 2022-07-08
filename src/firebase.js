import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDHonA7yXdPD3wRHm52XegPDhxs9KqSNRI',
  authDomain: 'auth-prodyct.firebaseapp.com',
  projectId: 'auth-prodyct',
  storageBucket: 'auth-prodyct.appspot.com',
  messagingSenderId: '309878816667',
  appId: '1:309878816667:web:e78d588a0d3a3ca56feb3e',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export const db = app.firestore();
// export default app;
