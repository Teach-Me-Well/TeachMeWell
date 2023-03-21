import Navbar from "../scenes/Navbar";
import Subhead from "../scenes/subhead";
import "../../styling/main.css"
import background from "../../subheadback.png";
import Logo from "../pic.png";
import "../../styling/main.css"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/main.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-service";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "../scenes/footer";
import { positions } from "@mui/system";
const Home = () => {
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
    <div style={{marginTop:"-2rem"}}>
      <div className="card" style={
        {
          backgroundColor:"#1e2225",
          width:"247px",
          height:"1479px",
          

        }
      }><div>
        <div>
        {isUserLoggedIn ? (
        <Link to ="/ide"><button class="gradient-hover-effect" style={{marginTop:"170px", marginLeft: "35px",width:"170px" ,textAlign: "center",borderRadius:"32px"}}>Start coding</button></Link>
        ):(
          <Link to ="/signup"><button class="gradient-hover-effect" style={{marginTop:"170px", marginLeft: "35px",width:"170px" ,textAlign: "center",borderRadius:"32px"}}>Start coding</button></Link>
        )}
        </div>
        <div style={{color:"white" ,marginTop:"30px", fontSize:"26px", marginLeft: "-31px", textAlign: "center"}}>
        <h className="text">Search</h> 
        </div>
        <div style={{color:"white" ,marginTop:"30px", fontSize:"26px", marginLeft: "-31px", textAlign: "center"}}>
        <h className="text">Challenges</h>
        </div>
        <div style={{color:"white" ,marginTop:"30px", fontSize:"26px", marginLeft: "-31px", textAlign: "center"}}>
        <h className="text">Sparks</h>
        </div>
        </div>
      </div>
    <Navbar /> 
    <Subhead />
    {/* <Footer /> */}
    </div>
  );
};

export default Home;
