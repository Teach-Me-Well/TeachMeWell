import React from "react";
import background from"../../subheadback.png"
const Subhead = () => {
  return (
    <div
      style={{
      backgroundColor:"#303952",
        width: "1289px",
        height: "640px",
        marginTop: "0px",
        marginLeft: "247px",
        position: "absolute",
      }}
    >
        <img src={background} style={{
      
        width: "1289px",
        height: "640px",
        marginTop: "0px",
        position: "absolute",
        opacity:"8%"
      }}/>
    </div>
  );
};
export default Subhead;
