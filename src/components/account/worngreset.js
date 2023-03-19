import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../../images/background.png";
import "../../styling/main.css"
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
          
         <div class="card" style={{position:"absolute",
    width: "1379px",
    height: "415px",
    marginLeft: "82px",
    marginTop:"100px",
    boxShadow: "1px 2px 13px 8px gray",
    background: "transparent"
  }}>
  <div class="card-her" style={{fontSize:"29px",marginLeft:"35px",marginTop:"82px", position:"absolute",textAlign:"center"}}>
  Look'S Like you are New to Teach Me Well as Entered Mail I'd is not Found on Teach Me Well. Please Try Again Later
   
   
                   
   
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={Reset}
                          style={{marginTop: "123px",
                          position: "absolute",
                          marginLeft:"-143px"
                        }}
                        >
                          Continue Sign up
                        </button>
                        </div>
                 </div>
                 </div>
                 
    </section>
    </>
  );
};
export default Reset;