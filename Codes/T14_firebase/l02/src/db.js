import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCI45bz0lP0sQGEgTML7Xgkv_Qy0f-8kGk',
  authDomain: 'software-dev-2564-3.firebaseapp.com',
  projectId: 'software-dev-2564-3',
  storageBucket: 'software-dev-2564-3.appspot.com',
  messagingSenderId: '85765429757',
  appId: '1:85765429757:web:eabb063600e16fbf7fa194',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database object
const db = getFirestore();

// console.log({ app, db });

export { db };
