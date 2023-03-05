import React from 'react';
import Logo from "../../assets/logo.png"
const OurCares = () => {
  return (
    <div>
      <div className="text-center">
      <img src={Logo}  style={{ width: "303px", margin: "-103px" }}></img></div>
      <h2 class="title" style={{margin:"0 auto 0px"}}>Our Cares</h2>
      <p style={{paddingLeft:"10px"}}>At Magva, we care about our customers, our community, and the environment. We strive to make ethical and sustainable decisions in every aspect of our business, from the products we sell to the way we treat our employees and the impact we have on the planet.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Our Customers</h3>
      <p style={{paddingLeft:"10px"}}>Our customers are at the heart of everything we do. We believe that everyone deserves access to high-quality, affordable products that enhance their lives. That's why we carefully curate our selection of products, ensuring that each item meets our high standards for quality, safety, and sustainability. We also provide exceptional customer service, making sure that every customer feels valued and heard.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Our Community</h3>
      <p style={{paddingLeft:"10px"}}>As a business, we have a responsibility to give back to the community that supports us. That's why we partner with local organizations and non-profits to make a positive impact in our community. We also strive to create a diverse and inclusive workplace, where every employee feels valued and respected.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Our Environment</h3>
      <p style={{paddingLeft:"10px"}}>We believe that sustainability is key to the future of our planet. That's why we're committed to reducing our environmental impact in every way we can. We work with suppliers who share our commitment to sustainability, and we use eco-friendly packaging materials whenever possible. We also encourage our customers to make sustainable choices by offering products that are reusable, recyclable, or biodegradable.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}} >Our Ethical Standards</h3>
      <p style={{paddingLeft:"10px"}}>At Magva, we hold ourselves to the highest ethical standards. We believe in treating our employees, customers, and suppliers with fairness, respect, and transparency. We do not tolerate any form of discrimination, harassment, or exploitation. We also carefully vet our suppliers to ensure that they meet our standards for ethical and sustainable practices.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Contact Us</h3>
      <p style={{paddingLeft:"10px"}}>If you have any questions or concerns about Our Cares policy, please don't hesitate to contact us at care@magva.com. We're committed to doing our part to make the world a better place.</p>
    </div>
  );
};

export default OurCares;
