import React, { useState } from "react";
import "../../styling/main.css";
import "../../styling/index.css";
import background from "../../images/background.png";
import { TextField } from "@mui/material";
import google from "../../images/googlelogo.png";
import facebook from "../../images/facebook.png";
import apple from "../../images/apple.png";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import video from "../../images/giphy.gif";
import { style } from "@mui/system";
const Signup = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const provider = new FacebookAuthProvider();
  const provider1 = new OAuthProvider("apple.com");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password == confirmpassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            DisplayName: "Teach Me Well User",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {});
          sendEmailVerification(auth.currentUser).then(() => {});
          const user = userCredential.user;
          console.log(user);
          navigate("/signin");
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
    } else {
      toast.error("Password Not Matched", {
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
              height: "711px",
              marginTop: "-22px",
              position: "absolute",
            }}
          ></img>
          <img
            style={{
              position: "absolute",
              marginLeft: "70px",
              height: "661px",
              width: "530px",
            }}
            src={video}
            alt="image not found"
          />
          <div
            class="card"
            style={{
              position: "absolute",
              width: "842px",
              height: "661px",
              marginLeft: "601px",
              boxShadow: "1px 2px 13px 8px gray",
              background: "transparent",
            }}
          >
            <div
              class="card-her"
              style={{
                fontSize: "50px",
                marginLeft: "146px",
                marginTop: "82px",
              }}
            >
              Register to Teach Me Well
            </div>
            <div className="line1"></div>
            <div style={{ marginLeft: "258px", marginTop: "20px" }}>
              <div class="card-body" style={{ marginBottom: "-17px" }}>
                <TextField
                  id="outlined-basic-2"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                  style={{ width: "308px" }}
                  required
                />
              </div>
              <div class="card-body" style={{ marginBottom: "-17px" }}>
                <TextField
                  id="outlined-basic-2"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Mayur@2608"
                  style={{ width: "308px" }}
                  required
                />
              </div>
              <div class="card-body" style={{ marginBottom: "-17px" }}>
                <TextField
                  id="outlined-basic-2"
                  label="Confirm Password"
                  variant="outlined"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  name="ConfirmPassword"
                  placeholder="Mayur@2608"
                  style={{ width: "308px" }}
                  required
                />
              </div>
            </div>
            <div className="for" style={{ marginLeft: "254px" }}>
              <input
                className="form-check-input"
                type="checkbox"
                value={checkbox}
                onChange={(e) => setCheckbox(e.target.value)}
                id="form2Example3cg"
                required="true"
                style={{ marginTop: "27px" }}
              />
              <label
                className="form-check"
                for="form2Example3g"
                required
                style={{ marginTop: "-21px" }}
              >
                I agree all statements in{" "}
                <a href="#!" className="text-body">
                  <a>
                    <u required>Terms of service</u>
                  </a>
                </a>
              </label>
            </div>

            <div style={{ marginLeft: "362px" }}>
              <button
                class="btn btn-primary"
                onClick={onSubmit}
                style={{ marginTop: "28px", width: "150px" }}
              >
                Sign up
              </button>
            </div>
            <div style={{ marginTop: "-21px", marginLeft: "-161px" }}>
              <p className="text-center text-muted mt-0 mb-0">
                Have already an account?
                <a className="fw-bold text-body">
                  <Link to="/signin">
                    <u style={{ color: "black" }}>Login here</u>
                  </Link>
                </a>
              </p>
            </div>
            <div style={{ marginLeft: "189px", marginTop: "-9px" }}>
              <div className="line3">
                <h className="font">OR </h>
                <div className="line2"></div>
              </div>
            </div>
            <div className="google">
              <img
                className="google1"
                src={google}
                style={{
                  width: "55px",
                  marginLeft: "248px",
                  marginTop: "15px",
                }}
                onClick={signupWithGoogle}
              />
              <img
                className="facebook"
                src={facebook}
                style={{ width: "55px", marginLeft: "98px", marginTop: "15px" }}
                onClick={signupWithFacebook}
              />
              <img
                className="apple"
                src={apple}
                style={{ width: "55px", marginLeft: "98px", marginTop: "15px" }}
                onClick={signupWithApple}
              />
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};
export default Signup;
