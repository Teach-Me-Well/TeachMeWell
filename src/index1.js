import React from "react";

const Ide = () => {
 
    return (
      <div>
        <title>Teach Me Well</title>
        <center>
          <h1>Teach Me Well</h1>
          <form id="myform" name="myform" method="post" action="compilecode">
            <h3>Code</h3>
            <textarea rows={13} cols={100} id="code" name="code" defaultValue={""} /> 
            <br />
            <h3>Input</h3>
            <textarea rows={10} cols={100} id="input" name="input" defaultValue={""} /> 
            <br />
            Language : <select name="lang">
              <option value="C">C</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>  
              <option value="Python">Python</option> 
              <option value="CS">C#</option>   
            </select>
            Compile With Input : 
            <input type="radio" name="inputRadio" id="inputRadio" defaultValue="true" />yes
            <input type="radio" name="inputRadio" id="inputRadio" defaultValue="false" />No
            <br />
            <input type="submit" defaultValue="submit" name="submit" />
          </form>
        </center>
      </div>
    );
  }
;
export default Ide