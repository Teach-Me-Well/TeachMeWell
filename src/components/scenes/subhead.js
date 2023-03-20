import React from "react";
import background from "../../subheadback.png";
import Logo from "../pic.png";
import "../../styling/main.css"
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SettingsIcon from "@mui/icons-material/Settings";
const Subhead = () => {
  return (
    <div
      style={{
        backgroundColor: "#303952",
        width: "1289px",
        height: "640px",
        marginTop: "0px",
        marginLeft: "247px",
        position: "absolute",
      }}
    >
      <img
        src={background}
        style={{
          width: "1289px",
          height: "640px",
          marginTop: "0px",
          position: "absolute",
          opacity: "8%",
        }}
      />
      <div>
        <img
          src="https://cpwebassets.codepen.io/assets/packs/lines-3-4541e35a1939230404d773f7eeddcc9b.svg"
          style={{
            width: "517px",
            rotate: "180deg",
            marginLeft: "772px",
          }}
        />
      </div>
      <div>
        <img
          src="https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg"
          style={{
            width: "517px",
            rotate: "180deg",
            marginTop: "-202px",
          }}
        ></img>
        <img
          src={Logo}
          style={{ width: "57px", marginTop: "-54rem", marginLeft: "-470px" }}
        />

        <h6
          style={{
            marginTop: "-580px",
            marginLeft: "122px",
            fontSize: "35px",
            color: "whitesmoke",
          }}
        >
          The Amazing Place to Learn, Develop<br></br> and Analyse Yourself.
        </h6>
        <h6
          style={{
            marginTop: "48px",
            marginLeft: "122px",
            fontSize: "24px",
            color: "white",
          }}
        >
          Teach Me Well believe that anyone can learn how to code,<br></br>
          regardless of their background or experience level. Our courses <br></br> and
          tutorials are designed to be accessible and engaging for<br></br> everyone,
          from absolute beginners to advanced<br></br> coders.
        </h6>

        <Link to="/signup">
          {" "}
          <button
            className="btn-hover color-10"
            style={{
              marginLeft: "355px",
              marginTop: "109px",
              width: "166px",
              position: "absolute",
              cursor: "pointer",
              borderRadius:"10px"
            }}
          >
            Sign-up for Free
            <span
              class="material-icons"
              style={{
                marginLeft: "-5px",
                marginTop: "1px",
                position: "absolute",
              }}
            >
              arrow_forward_ios
            </span>
          </button>
        </Link>
      </div>
      <div
        className="card"
        style={{
          height: "341px",
          width: "385px",
          marginTop: "-296px",
          marginLeft: "819px",
          backgroundColor: "gray",
          opacity:"50%"
        }}
      >
        {" "}
      </div>
      <div
        className="card"
        style={{
          height: "119px",
          width: "299px",
          marginTop: "-359px",
          marginLeft: "914px",
          backgroundColor: "#2a2a2a",
          boxShadow: "2px 2px 7px 0px black",
        }}
      >
        <div>
          <span class="material-icons" style={{ color: "grey" }}>
            settings
          </span>
          <h style={{ color: "white", position: "absolute" }}>HTML</h>
        </div>
        <div class="rect" style={{ color: "yellow" }}>
          <h6>&lt;div</h6>
          <h6
            style={{
              color: "lightblue",
              marginLeft: "39px",
              marginTop: "-27px",
            }}
          >
            class
          </h6>
          <h6
            style={{ color: "white", marginLeft: "80px", marginTop: "-27px" }}
          >
            =
          </h6>
          <h6
            style={{ color: "orange", marginTop: "-27px", marginLeft: "94px" }}
          >
            "react"
          </h6>
          <h6
            style={{ color: "yellow", marginTop: "-27px", marginLeft: "145px" }}
          >
            &gt;&lt;/div&gt;
          </h6>
        </div>
      </div>
      <div
        className="card"
        style={{
          height: "119px",
          width: "299px",
          marginTop: "22px",
          marginLeft: "983px",
          backgroundColor: "#2a2a2a",
          boxShadow: "2px 2px 7px 0px black",
        }}
      ></div>
      <div
        className="card"
        style={{
          height: "119px",
          width: "299px",
          marginTop: "22px",
          marginLeft: "914px",
          backgroundColor: "#2a2a2a",
          boxShadow: "2px 2px 7px 0px black",
        }}
      >
        <div>
          <span class="material-icons" style={{ color: "grey" }}>
            settings
          </span>
          <h style={{ color: "white", position: "absolute" }}>JS</h>
        </div>
        <div>
          {" "}
          <h style={{ color: "yellow" }}>var</h>{" "}
          <h style={{ color: "green" }}>colors</h>{" "}
          <h style={{ color: "white" }}>=</h>
          <h style={{ color: "white" }}> [</h>
          <h style={{ color: "green" }}>"#74B087"</h>
          <h style={{ color: "white" }}>,</h>
          <h style={{ color: "green" }}>"#DE7300"</h>
          <h style={{ color: "white" }}>,</h>
          <h style={{ color: "green" }}>"#74B087"</h>
          <h style={{ color: "white" }}>]</h>
          <h style={{ color: "white" }}>;</h>
          <div style={{ marginTop: "-12px" }}>
            <h style={{ color: "yellow" }}>
              <br></br>function
            </h>
            <h style={{ color: "lightblue" }}> animate</h>
            <h style={{ color: "white" }}>()</h>{" "}
            <h style={{ color: "white" }}> &#123; &#125; </h>
            <h style={{ color: "white" }}>;</h>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subhead;
