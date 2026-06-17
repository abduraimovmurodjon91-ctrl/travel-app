import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "travel-app-9e106.firebasestorage.app",
  messagingSenderId: "324500968080",
  appId: "1:324500968080:web:a09e2ba4a61baab9e67e15",
  measurementId: "G-MHGHWZ4Z11",
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
