import React from "react";
import Navbar from "../scenes/Navbar";
import Subhead from "../scenes/subhead";

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
        <button class="btn btn-primary" style={{marginTop:"140px", marginLeft: "35px",width:"150px" ,textAlign: "center"}}>Start coding</button>
        </div>
        <div style={{color:"white" ,marginTop:"30px", fontSize:"26px", marginLeft: "-31px", textAlign: "center"}}>
          Search 
        </div>
        <div style={{color:"white" ,marginTop:"30px", fontSize:"26px", marginLeft: "-31px", textAlign: "center"}}>
        Challenges
        </div>
        <div style={{color:"white" ,marginTop:"30px", fontSize:"26px", marginLeft: "-31px", textAlign: "center"}}>
          Sparks
        </div>
        </div>
      </div>
    <Navbar /> 
    <Subhead />
    </div>
  );
};

export default Home;
