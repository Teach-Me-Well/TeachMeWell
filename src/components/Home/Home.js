import React from "react";
import { Form } from "react-router-dom";



// import HeadInfo from '../headinfo/HeadInfo'
import Navbar from "../Navbar/Navbar";
import Subhead from "../Subhead/Subhead"
// import Annocument from '../Annocument'
import Footer from "../Footer/footer"
import Slide from "../Slidingimage/slide";
import Brand from "../Brands/brands"
import Card from "../Slidecard/card"
import Card1 from "../Slidecard1/card"

// import Discount from "../Discount/card"
// import Deals from "../deals/deals"
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
      {/* <Deals/> */}
      {/* <FlashDeals/> */}
      <Card/>
      <Card1/>

{/* <Discount/> */}
      <Footer />
    </div>
  );
};

export default Home;
