import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_mPJ3K9OelMDqRIm_T8RgrUaRhRi38wI",
  authDomain: "teachmewell-73a84.firebaseapp.com",
  databaseURL: "https://teachmewell-73a84-default-rtdb.firebaseio.com",
  projectId: "teachmewell-73a84",
  storageBucket: "teachmewell-73a84.appspot.com",
  messagingSenderId: "970508666603",
  appId: "1:970508666603:web:1971ab8604b7928d5c60ae",
  measurementId: "G-MH2ZKNWQZZ"
}
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;