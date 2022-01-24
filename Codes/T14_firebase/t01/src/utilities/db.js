import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDLbWsdsmorazJp1bpBdOjILkAmmgYhKmE',
  authDomain: 'software-dev-2564-2-1.firebaseapp.com',
  projectId: 'software-dev-2564-2-1',
  storageBucket: 'software-dev-2564-2-1.appspot.com',
  messagingSenderId: '591729143131',
  appId: '1:591729143131:web:52781904db575d9d2c7e7e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database object
const db = getFirestore();

console.log({ app, db });

export { db };
