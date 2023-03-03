import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/logo.png";
import "../../redux/cssfile/main.css"
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email)
    .then((userCredential) => {
    console.log("Password reset email sent");
    toast("Password reset email sent");
    navigate("/afterreset");
    })
    .catch((error)=> {
      console.log(error)
      navigate("/worngreset");
  
    })
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
                      <p>Enter your Email ID to reset your password</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Phone number or email address"
                        />
                        <label className="form-label" for="form2Example11">
                          {" "}
                        </label>{" "}
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="gradient-custom-2 my-1"
                          type="button"
                          onClick={triggerResetEmail}
                        >
                          Reset Password
                        </button>
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
export default Reset;
