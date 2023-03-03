import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/logo.png";
import "../../redux/cssfile/main.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
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

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        navigate("/");
        toast("Signup Successfull");
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
    <section style={{ overflow: "hidden" }}>
      {/* // <section className="h-212 gradient-form w-100" style={{backgroundColor:"#eee", overflow:"hidden"}}> */}
      <div className="container mx-4 px-auto py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
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
                          className="form-control"
                          placeholder="Phone number or email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" for="form2Example11">
                          Username
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter Password"
                        />
                        <label className="form-label" for="form2Example22">
                          Password
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <a href="index1.html">
                          <button
                            className="gradient-custom-2 my-1"
                            type="button"
                            onClick={onLogin}
                          >
                            Sign in
                          </button>
                        </a>
                        <br></br>
                        <a className="text-muted my-2" >
                      <Link to="/reset"><u>Forgot password?</u></Link>
                        </a>
                      </div>

                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <div className="logo">
                          <a
                            onClick={signInWithFacebook}
                            className="text-black"
                          >
                            <i className="fab fa-facebook-f fa-lg"></i>
                          </a>
                          <a onClick={signupWithApple} className="text-black">
                            <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                          </a>
                          <a onClick={signInWithGoogle} className="text-black">
                            <i className="fab fa-google fa-lg"></i>
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <a  className="fw-bold text-body">
                        <Link to="/signup"> <u>Register here</u></Link>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // </section> */}
    </section>
  );
};
export default Login;
