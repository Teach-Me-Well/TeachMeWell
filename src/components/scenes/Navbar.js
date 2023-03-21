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
          marginTop: "-1471px",
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
              <h className="text">Quiz</h>
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
               <h className="text">Resources</h>
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
               <h className="text">Community</h>
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
               <h className="text">Cares</h>
            </div>
          </div>
          {isUserLoggedIn ? (
            <a
              class="btn-hover color-10"
              style={{ cursor: "pointer", marginLeft: "1309px",marginTop:"-53px",position:"absolute" ,width:"127px",textDecoration:"none"}}
              onClick={handleLogout}
            >
              <h style={{marginTop:"13px",position:"absolute" ,marginLeft:"-22px"}}>Logout</h>
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
