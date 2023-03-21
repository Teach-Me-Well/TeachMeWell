import React from "react"; 
import Typewriter from "typewriter-effect";
import "../../styling/main.css"

    
    function Type() {
        return (
          <div className="Type_card">
            <Typewriter
             onInit={(typewriter)=> {
             typewriter
             .typeString("Css")
             .pauseFor(1000)
             }}
             />
          </div>
        );
      }
    export default Type