import React, { useState } from "react";
import "../../styling/main.css";
import "../../styling/index.css";
import { useNavigate } from "react-router-dom";
import background from "../../images/background.png";
import { TextField } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      .catch((error) => {
        console.log(error);
        navigate("/worngreset");
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
          <div class="card" style={{ position: "absolute",width: "876px"  ,  marginLeft:" 310px",
    marginTop: "117px",
    boxShadow: "2px 3px 22px 2px gray",
    background: "transparent" }}>
            <div
              class="carr"
              style={{
                fontSize: "50px",
                marginLeft: "259px",
                marginTop: "82px",
              }}
            >
              Reset you Password
            </div>
            <div className="line5"></div>
            <div style={{ marginLeft: "292px", marginTop: "20px" }}>
              <div class="card-body" style={{ marginBottom: "20px" }}>
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
            </div>

            <div style={{ marginLeft: "380px" }}>
              <button
                class="btn btn-primary"
                onClick={triggerResetEmail}
                style={{ marginTop: "-6px", width: "150px" }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};
export default Reset;
