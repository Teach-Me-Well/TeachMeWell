import React from 'react';
import Logo from "../../assets/logo.png"
const Careers = () => {
  return (
    <div>
       <div className="text-center">
      <img src={Logo}  style={{ width: "303px", margin: "-103px" }}></img></div>
      <h2 class="title" style={{margin:"0 auto 0px"}}>Careers</h2>
      <p style={{paddingLeft:"10px"}}>At Magva, we're always looking for talented and passionate individuals to join our team. We're committed to creating a supportive and inclusive workplace where everyone can thrive and make a meaningful impact on our business and the world.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Our Culture</h3>
      <p style={{paddingLeft:"10px"}}>We believe that our people are our greatest asset. That's why we're dedicated to fostering a culture of collaboration, creativity, and continuous learning. We strive to create an environment where everyone feels valued, supported, and empowered to reach their full potential.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Our Values</h3>
      <ul>
        <li><strong>1.Integrity:</strong> We always do the right thing, even when it's difficult.</li>
        <li><strong>2.Innovation:</strong> We're constantly exploring new ideas and pushing boundaries.</li>
        <li><strong>3.Sustainability:</strong> We're committed to minimizing our impact on the planet and promoting sustainable practices.</li>
        <li><strong>4.Inclusion:</strong> We embrace diversity and believe that everyone should have equal opportunities to succeed.</li>
      </ul>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Current Openings</h3>
      <p style={{paddingLeft:"10px"}}>We're currently hiring for the following positions:</p>
      <ul>
        <li>1.Marketing Manager</li>
        <li>2.Product Designer</li>
        <li>3.Software Engineer</li>
        <li>4.Customer Service Representative</li>
      </ul>
      <p style={{paddingLeft:"10px"}}>If you're interested in any of these positions, please send your resume and a cover letter to careers@magva.com.</p>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Why Work for Magva?</h3>
      <p style={{paddingLeft:"10px"}}>Working at Magva is more than just a job. Here are just a few reasons why you should consider joining our team:</p>
      <ul>
        <li><strong>1.Meaningful Work:</strong> At Magva, you'll have the opportunity to work on projects that make a positive impact on the world.</li>
        <li><strong>2.Growth Opportunities:</strong> We're dedicated to helping our employees grow and develop their skills through training, mentoring, and career advancement opportunities.</li>
        <li><strong>3.Benefits and Perks:</strong> We offer competitive compensation and benefits packages, as well as a range of perks and discounts to help our employees live happy, healthy lives.</li>
        <li><strong>4.Culture and Community:</strong> We're proud of our supportive and inclusive workplace culture, and we're committed to fostering a sense of community among our employees through regular team-building activities and events.</li>
      </ul>

      <h3 class="title" style={{margin:"0 auto 0px"}}>Contact Us</h3>
      <p style={{paddingLeft:"10px"}}>If you have any questions or concerns about Careers page or any of our job openings, please don't hesitate to contact us at careers@magva.com. We look forward to hearing from you!</p>
    </div>
  );
};

export default Careers;
