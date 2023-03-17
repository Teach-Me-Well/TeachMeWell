import React, { useState } from "react";
import "../../redux/cssfile/main.css"
import background from "../../background.png";
import { TextField } from "@mui/material";
import google from "../../googlelogo.png";
import facebook from "../../facebook.png";
import apple from "../../apple.png";
import { NavLink, useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
const Signup = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const provider = new FacebookAuthProvider();
    const provider1 = new OAuthProvider("apple.com");
  
    const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const onSubmit = async (e) => {
      e.preventDefault();
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendSignInLinkToEmail(auth, email)
          window.localStorage.setItem('emailForSignIn', email);
          // Signed in
          const user = userCredential.user;
          //  userCredential.user.sendEmailVerification();
          console.log(user);
          navigate("/login");
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
    const signupWithFacebook = () => {
      signInWithPopup(auth, provider)
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
  
    const signupWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
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
  return (
    <>
      <section style={{ overflow: "hidden" }}>
        <div className="c">
          <img
            src={background}
            style={{
              width: "100%",
              height: "746px",
              marginTop: "-22px",
              position: "absolute",
            }}
          ></img>
         <div class="ck" style={{position:"absolute",}}>
  <div class="card-header" style={{fontSize:"50px",marginLeft:"492px",marginTop:"82px"}}>
   Signup IN Teach Me Well
   </div>
   <div className="line1"></div>
   <div style={{marginLeft:"603px",
    marginTop:"20px"}}>
  <div class="card-body"style={{marginBottom:"20px"}} >
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
              />
              </div>
              <div class="card-body" style={{marginBottom:"20px"}}>
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
              />
              </div>
              <div class="card-body" style={{marginBottom:"20px"}}>
  <TextField
                id="outlined-basic-2"
                label="Confirm Password"
                variant="outlined"
                // value={email}
                // onChange={handleChange}
                type="password"
                name="confirmpassword"
                placeholder="Mayur@2608"
                style={{width:"308px"}}
              />
              </div>
              </div>
                          <div className="for" style={{marginLeft:"600px"}}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="form2Example3cg"
                              required = "true"
                            />
                            <label
                              className="form-check"
                              for="form2Example3g"
                              required
                              style={{marginTop:"-25px"}}
                            >
                              I agree all statements in{" "}
                              <a href="#!" className="text-body">
                                <a>
                                 <u required>Terms of service</u>
                                </a>
                              </a>
                            </label>
                          </div>

              <div style={{marginLeft: "668px"}}>
    <button class="btn btn-primary" onClick={onSubmit} style={{marginTop:"28px",width:"150px"}}>Sign up</button>
    </div>
    <div style={{marginLeft:"520px",marginTop:"-23px"}}>
    <div className="line3">
                <h className="font">OR </h>
                <div className="line2"></div>
              </div>
              </div>
              <div className="google">
    <img className="google1" src={google} style={{width: "55px" , marginLeft: "570px",marginTop: "15px"}} onClick={signupWithGoogle}/>
    <img className="facebook"src={facebook} style={{width: "55px" , marginLeft: "98px",marginTop: "15px"}} onClick={signupWithFacebook }/>
    <img className="apple"src={apple} style={{width: "55px" , marginLeft: "98px",marginTop: "15px"}} onClick={signupWithApple}/>
  </div>
  </div>
  

        </div>
      </section>
    </>
  );
};
export default Signup;
