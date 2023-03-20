import React from "react"; 
import "../../styling/main.css"
const Type = () => {
    console.clear();
    function typingEffect(element,speed){
      let text=element.innerHTML;
      element.innerHTML="";
     let i=0;
      let timer=setInterval(function(){
        if(i<text.length){
          element.append(text.charAt(i))
          i++;
        }else{
          clearInterval(timer);
        }
      },speed)
      
    }

    
      return (
        <div>
          <div className="wrapper">
            <h1 onChange={typingEffect("h1",25)}>CSS</h1>
          </div> 
        </div>
      );
    }
    export default Type