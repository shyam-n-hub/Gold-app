// ============================================
// Firebase Configuration - K G S Jewelry
// ============================================
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBlK_r-ieeCoVyYceCh1lyc8cgUcIM18a4",
    authDomain: "kgsjewel-98b89.firebaseapp.com",
    databaseURL: "https://kgsjewel-98b89-default-rtdb.firebaseio.com",
    projectId: "kgsjewel-98b89",
    storageBucket: "kgsjewel-98b89.firebasestorage.app",
    messagingSenderId: "740786421316",
    appId: "1:740786421316:web:928a95c1b2dc7bb79ac611",
    measurementId: "G-X3B2JLV6ZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

export { app, database, auth, analytics };
export default app;
