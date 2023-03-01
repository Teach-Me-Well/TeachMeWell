import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoENRZU9UePsn8rcxHs4iXjiqCao6poV4",
    authDomain: "magva-2311b.firebaseapp.com",
    projectId: "magva-2311b",
    storageBucket: "magva-2311b.appspot.com",
    messagingSenderId: "912781196053",
    appId: "1:912781196053:web:a2496b5a074058a9b2c71c",
    measurementId: "G-0DRZEX8QNY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;