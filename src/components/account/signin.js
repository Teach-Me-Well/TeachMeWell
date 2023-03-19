import React, { useState } from "react";
import "../../styling/main.css";
import "../../styling/index.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import background from "../../images/background.png";
import { TextField } from "@mui/material";
import google from "../../images/googlelogo.png";
import facebook from "../../images/facebook.png";
import apple from "../../images/apple.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import video from "../../images/giphy.gif";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
} from "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  OAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const provider = new FacebookAuthProvider();
  const provider1 = new OAuthProvider("apple.com");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        if (user.emailVerified == true) {
          navigate("/");
          toast("SignIn Successfull");
        } else {
          toast.error("Email Not Verified", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  const signInWithFacebook = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.email;
        console.log(user);
        navigate("/");
        toast("Signup Successfull");
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // ..
      });
  };
  const signupWithApple = () => {
    signInWithPopup(auth, provider1)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast(" Let’s toast to this toast today! ");
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // ..
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.email;
        console.log(user);
        navigate("/");
        toast("Signup Successfull");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // ..
      });
  };
  return (
    <>
      <section style={{ overflow: "hidden" }}>
        <div className="c">
          <img
            src={background}
            style={{
              width: "100%",
              height: "711px",
              marginTop: "-22px",
              position: "absolute",
            }}
          ></img>
          <img style={{position: "absolute",
    marginLeft: "70px",
    height: "661px",
    width: "530px"}} src={video}/>
         <div class="card" style={{position:"absolute",
    width: "842px",
    height: "661px",
    marginLeft: "601px",
    boxShadow: "1px 2px 13px 8px gray",
    background: "transparent"
  }}>
  <div class="card-her" style={{fontSize:"50px",marginLeft:"146px",marginTop:"82px"}}>
   Log In To Teach Me Well
   </div>
   <div className="line1"></div>
   <div style={{marginLeft:"258px",marginTop:"20px"}}>
  <div class="card-body"style={{marginBottom:"-17px"}} >
  <TextField
                id="outlined-basic-2"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="xyz@gmail.com"
                style={{width:"308px"}}
                required
              />
              </div>
              <div class="card-body" style={{marginBottom:"-17px"}}>
  <TextField
                id="outlined-basic-2"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Mayur@2608"
                style={{width:"308px"}}
                required
              />
              </div>
              </div>
                          <div className="for" style={{marginLeft:"254px"}}>
                          
                              <a href="/reset" className="text-body">
                                <a style={{marginLeft:"202px"}}>
                                 <u required>Forgot Password?</u>
                                </a>
                              </a>
                           
                          </div>

              <div style={{marginLeft: "362px"}}>
    <button class="btn btn-primary" onClick={onLogin} style={{marginTop:"28px",width:"150px"}}>Sign In</button>
    </div>
    <div style={{ marginTop:"-21px", marginLeft:"-161px"}}>
    <p className="text-center text-muted mt-0 mb-0" >
                           Don't Have an account?
                            <a  className="fw-bold text-body">
                            <Link to="/signup"><u style={{color:"black"}}>Register Now</u></Link>
                            </a>
                          </p></div>
    <div style={{marginLeft:"189px",marginTop:"-9px"}}>
    <div className="line3">
                <h className="font">OR </h>
                <div className="line2"></div>
              </div>
              </div>
              <div className="google">
    <img className="google1" src={google} style={{width: "55px" , marginLeft: "248px",marginTop: "15px"}} onClick={signInWithGoogle}/>
    <img className="facebook"src={facebook} style={{width: "55px" , marginLeft: "98px",marginTop: "15px"}} onClick={signInWithFacebook }/>
    <img className="apple"src={apple} style={{width: "55px" , marginLeft: "98px",marginTop: "15px"}} onClick={signupWithApple}/>
  </div>
  </div>
  <ToastContainer/>

        </div>
      </section>
    </>
  );
};
export default Login;
