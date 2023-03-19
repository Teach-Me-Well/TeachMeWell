import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/main.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-service";
import { onAuthStateChanged } from "firebase/auth";
import { height } from "@mui/system";
// import Cart from "../src/components/CartItems/CartItems";
const Navbar = () => {
  const state = useSelector((state) => state.cartReducer);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const Name = user.displayName;
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("name", Name);
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
      <div
        className="card"
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "81px",
          marginTop: "-721px",
        }}
      >
        <div>
          {isUserLoggedIn ? (
            <a
              class="btn btn-primary"
              style={{ cursor: "pointer", marginLeft: "1441px" }}
              onClick={handleLogout}
            >
              Logout
            </a>
          ) : (
            <div>
              <Link to="/signin">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ marginLeft: "1355px" }}
                >
                  Sign-in
                </a>
              </Link>
              <a></a>
              <Link to="/signup">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ marginLeft: "1441px", marginTop: "-94px" }}
                >
                  Sign-up
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
