import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/main.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-service";
import { onAuthStateChanged } from "firebase/auth";
import Logo from "../logo.png";
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
          backgroundColor: "#1e2225",
          width: "100%",
          height: "81px",
          marginTop: "-721px",
        }}
      >
        <img src={Logo} style={{ width: "240px", marginTop: "14px" }} />
        <div>
          <div>
            <div
              style={{
                color: "white",
                marginTop: "-51px",
                fontSize: "26px",
                position: "absolute",
                marginLeft: "338px",
              }}
            >
              Quiz
            </div>
            <div
              style={{
                color: "white",
                marginTop: "26px",
                fontSize: "26px",
                position: "absolute",
                marginTop: "-51px",
                marginLeft: "440px",
              }}
            >
              Resources
            </div>
            <div
              style={{
                color: "white",
                /*marginTop: 30px; */
                fontSize: "26px",
                position: "absolute",
                marginTop: "-51px",
                marginLeft: "595px",
              }}
            >
              community
            </div>
            <div
              style={{
                color: "white",
                /*marginTop: 30px; */
                fontSize: "26px",
                position: "absolute",
                marginTop: "-51px",
                marginLeft: "772px",
              }}
            >
              Cares
            </div>
          </div>
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
              <a
                href="/signin"
                className="btn btn-primary"
                style={{ marginLeft: "1314px", marginTop: "-62px",width: "85px"}}
              >
                Sign-in
              </a>

              <a></a>

              <a
                href="/signup"
                className="btn btn-primary"
                style={{
                  marginLeft: "1418px",
                  marginTop: "-109px",
                  width: "85px",
                }}
              >
                Sign-up
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
