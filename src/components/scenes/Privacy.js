import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
export default function Privacy() {
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#8ea7e9", marginTop: "-2rem" }}>
        <a className="navbar-brand mx-auto " href="#">
          <Link to="/">
            <img src={Logo} height="auto" width="303px" style={{ margin: "-7rem" }} alt="magva logo" />
          </Link>
        </a>

      </nav>
      <div><h1 style={{ textAlign: "center" }}>Privacy Policy for MAGVA</h1>
        <h1 style={{ paddingLeft: "10px" }}>1.Introduction</h1>
        <p style={{ paddingLeft: "10px" }}>At MAGVA, accessible from http://localhost:3000/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by MAGVA and how we use it.</p>

        <p style={{ paddingLeft: "10px" }}>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

        <h2 style={{ paddingLeft: "10px" }}><b>2.Log Files</b></h2>

        <p style={{ paddingLeft: "10px" }}>MAGVA follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.org">Privacy Policy Generator</a>.</p>

        <h2 style={{ paddingLeft: "10px" }}><b>3.Cookies and Web Beacons</b></h2>

        <p style={{ paddingLeft: "10px" }}>Like any other website, MAGVA uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

        <h2 style={{ paddingLeft: "10px" }}><b>4.Google DoubleClick DART Cookie</b></h2>

        <p style={{ paddingLeft: "10px" }}>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>

        <h2 style={{ paddingLeft: "10px" }}><b>5.Our Advertising Partners</b></h2>

        <p style={{ paddingLeft: "10px" }}>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>

        <ul>
          <li>
            <p style={{ paddingLeft: "10px" }}><b>6.Google</b></p>
            <p style={{ paddingLeft: "10px" }}><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
          </li>
        </ul>

        <h2 style={{ paddingLeft: "10px" }}> <b>7.Privacy Policies</b></h2>

        <p style={{ paddingLeft: "10px" }}>You may consult this list to find the Privacy Policy for each of the advertising partners of MAGVA.</p>

        <p style={{ paddingLeft: "10px" }}>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on MAGVA, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

        <p style={{ paddingLeft: "10px" }}>Note that MAGVA has no access to or control over these cookies that are used by third-party advertisers.</p>

        <h2 style={{ paddingLeft: "10px" }}><b>Third Party Privacy Policies</b></h2>

        <p style={{ paddingLeft: "10px" }}>MAGVA's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

        <p style={{ paddingLeft: "10px" }}>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

        <h2 style={{ paddingLeft: "10px" }}><b>8.Children's Information</b></h2>

        <p style={{ paddingLeft: "10px" }}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

        <p style={{ paddingLeft: "10px" }}>MAGVA does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

        <h2 style={{ paddingLeft: "10px" }}><b>9.Online Privacy Policy Only</b></h2>

        <p style={{ paddingLeft: "10px" }}>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in MAGVA. This policy is not applicable to any information collected offline or via channels other than this website.</p>

        <h2 style={{ paddingLeft: "10px" }}><b>10.Consent</b></h2>

        <p style={{ paddingLeft: "10px" }}>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </div>
    </>
  )
}
