import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styling/main.css';
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-service";
import { onAuthStateChanged } from "firebase/auth";
// import Cart from "../src/components/CartItems/CartItems";
const Navbar = () => {
  const state = useSelector((state) => state.cartReducer);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setIsUserLoggedIn(true);
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        setIsUserLoggedIn(false);
        console.log("user is logged out");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      
    </>
  );
}

export default Navbar;


