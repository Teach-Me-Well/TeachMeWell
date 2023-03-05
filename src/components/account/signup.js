import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "../../redux/cssfile/main.css"
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
        <div className="container py-5 h-100 w-100">
          <div className="row d-flex justify-content-center align-items-center h-100 mx-auto">
            <div className="col-xl-6">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src={Logo}
                          style={{ width: "303px", margin: "-103px" }}
                          alt="logo"
                        />
                        <h4
                          className="mt-1 mb-5 pb-1"
                          style={{
                            fontSize: "30px",
                            fontWeight: "700",
                          }}
                        >
                          Welcome To MAGVA...
                        </h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                          <label className="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter Password"
                          />
                          <label className="form-label" for="form2Example22" v>
                            Password
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Confirm your password"
                          />
                          <label className="form-label" for="form2Example22">
                            Confirm Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3cg"
                              required
                            />
                            <label
                              className="form-check-label"
                              for="form2Example3g"
                              required
                            >
                              I agree all statements in{" "}
                              <a href="#!" className="text-body">
                                <a>
                                  <Link  to ="/terms"><u required>Terms of service</u></Link>
                                </a>
                              </a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center">
                            <button
                              type="button"
                              className=" gradient-custom-4 "
                              onClick={onSubmit}
                            >
                              Register
                            </button>
                          </div>
                          {/* <br></br> */}
                          <div className="d-flex justify-content-center text-center mt-5 pt-1">
                            <div className="logo-1">
                              <a
                                onClick={signupWithFacebook}
                                className="text-black"
                              >
                                <i className="fab fa-facebook-f fa-lg"></i>
                              </a>
                              <a
                                onClick={signupWithApple}
                                className="text-black"
                              >
                                <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                              </a>
                              <a
                                onClick={signupWithGoogle}
                                className="text-black"
                              >
                                <i className="fab fa-google fa-lg"></i>
                              </a>
                            </div>
                          </div>

                          <p className="text-center text-muted mt-5 mb-0">
                            Have already an account?
                            <a  className="fw-bold text-body">
                            <Link to="/login"><u>Login here</u></Link>
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;