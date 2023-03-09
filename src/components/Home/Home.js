import React from "react";
import { Form } from "react-router-dom";
import Navbar from "../scenes/Navbar";
import Subhead from "../scenes/Subhead"
import Footer from "../scenes/footer"
import Slide from "../scenes/slide";
import Brand from "../products/brands"
import Card from "../products/card"
import Card1 from "../products/card1"
import Best from "../products/best"
const Home = () => {

  return (
    <div style={{marginTop:"-2rem"}}>

      <Navbar /> 
      <Subhead />
      <Slide />
      <Best/>
      <Card/>
      <Brand/>
      <Card1/>
      

      <Footer />
    </div>
  );
};

export default Home;
