import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/logo.png";
import "../resetpass/resetpass.css";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Reset = () => {
    const navigate = useNavigate();
    const Reset = async () => {
        navigate("/signup");
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
                       
                      </h4>
                    </div>

                    <form>
                      <p>Look'S Like you are New to MAGVA as Entered Mail I'd is not Found on MAGVA. Please Try Again Later</p>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="gradient-custom-2 my-1"
                          type="button"
                          onClick={Reset}
                        >
                          Continue Signup
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
