import React from "react";
import Navbar from "../scenes/Navbar";
import Subhead from "../scenes/subhead";
import "../../styling/main.css"
const Home = () => {

  return (
    <div style={{marginTop:"-2rem"}}>
      <div className="card" style={
        {
          backgroundColor:"#1e2225",
          width:"247px",
          height:"721px"

        }
      }><div>
        <div>
        <button class="gradient-hover-effect" style={{marginTop:"170px", marginLeft: "35px",width:"170px" ,textAlign: "center",borderRadius:"32px"}}>Start coding</button>
        </div>
        <div style={{color:"white" ,marginTop:"30px", fontSize:"26px", marginLeft: "-31px", textAlign: "center"}}>
        <h className="text">Search</h> 
        </div>
        <div style={{color:"white" ,marginTop:"30px", fontSize:"26px", marginLeft: "-31px", textAlign: "center"}}>
        <h className="text">Challenges</h>
        </div>
        <div style={{color:"white" ,marginTop:"30px", fontSize:"26px", marginLeft: "-31px", textAlign: "center"}}>
        <h className="text">Sparks</h>
        </div>
        </div>
      </div>
    <Navbar /> 
    <Subhead />
    </div>
  );
};

export default Home;
