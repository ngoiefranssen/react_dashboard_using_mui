// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCVwlKnH0YGXZp4dA6-weJeIO6PDlK0K_Y',
  authDomain: 'products-4fa69.firebaseapp.com',
  projectId: 'products-4fa69',
  storageBucket: 'products-4fa69.appspot.com',
  messagingSenderId: '921647844161',
  appId: '1:921647844161:web:0d603b9c54582c1fa1efc0',
  measurementId: 'G-00DWYXML0X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
