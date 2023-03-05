import React from 'react';
import Logo from "../../assets/logo.png"
const OurStores = () => {
  return (
    <div>
      <div className="text-center">
      <img src={Logo}  style={{ width: "303px", margin: "-103px" }}></img></div>
      <h2 class="title" style={{margin:"0 auto 0px"}}>Our Stores</h2>
      <p style={{paddingLeft:"10px"}}>At Magva, we believe that shopping should be a delightful experience. That's why we have physical stores in addition to our online presence. Our stores are designed to provide a welcoming and comfortable environment where customers can explore our products and receive personalized attention from our knowledgeable staff.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Our Store Locations</h3>
      <p style={{paddingLeft:"10px"}}>We currently have stores located in several cities across the United States, with plans to expand in the future. Our store locations can be found on our website, along with their hours of operation and contact information.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>What You Can Expect In Our Stores</h3>
      <p style={{paddingLeft:"10px"}}>When you visit one of our stores, you can expect to find a carefully curated selection of products that reflect our commitment to quality, safety, and sustainability. Our friendly and knowledgeable staff are always available to assist you with any questions or concerns you may have. We also offer a range of in-store services, including product demonstrations and workshops.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Our Safety Measures</h3>
      <p style={{paddingLeft:"10px"}}>At Magva, the safety of our customers and staff is our top priority. In light of the COVID-19 pandemic, we have implemented a range of safety measures in our stores, including regular cleaning and sanitization, mask requirements, and social distancing protocols. We also offer contactless payment options to minimize physical contact.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Our Returns Policy</h3>
      <p>If you make a purchase in one of our stores and need to make a return or exchange, we're happy to help. Please bring your receipt and the item(s) in their original packaging to the store within 30 days of purchase. Our staff will be happy to assist you with the return or exchange process.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Contact Us</h3>
      <p style={{paddingLeft:"10px"}}>If you have any questions or concerns about Our Stores policy or any of our products or services, please don't hesitate to contact us at customerservice@magva.com. We're committed to providing our customers with the best possible shopping experience, whether in-store or online.</p>
    </div>
  );
};

export default OurStores;
