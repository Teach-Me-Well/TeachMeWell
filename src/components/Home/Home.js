import React from "react";
import { Form } from "react-router-dom";



// import HeadInfo from '../headinfo/HeadInfo'
import Navbar from "../Navbar/Navbar";
import Subhead from "../Subhead/Subhead"
// import Annocument from '../Annocument'
import Footer from "../Footer/footer"
import Slide from "../Slidingimage/slide";
import Brand from "../Brands/brands"
// import Wrapper from '../wrapper/Wrapper'
// import Slideingimg from '../slideingimg/slidingimg'
// import Form from '../form/Form'
// import FlashDeals from "../flashDeals/FlashDeals"
const Home = () => {

  return (
    <div style={{marginTop:"-2rem"}}>

      <Navbar />
      <Subhead />
      <Slide />
      <Brand />
      {/* <FlashDeals/> */}
      <Footer />
    </div>
  );
};

export default Home;
