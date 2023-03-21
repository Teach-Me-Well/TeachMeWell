import React from 'react';
// import Logo from "../../assets/logo.png"
import "../../styling/main.css"
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    

    <MDBFooter className='text-center text-lg-start text-muted' style={{ margin: "auto", marginTop: "10%", backgroundColor: '#7286D3' }}>
       <div className='text-center p-4' style={{ backgroundColor: '#8EA7E9', color: "black" , fontSize:"23px"}}>
        <a className='text-reset fw-bold' href='#'>
          Back To Top <i class="fas fa-angle-double-up"></i>
        </a>
      </div>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
         <a  className='me-4 text-reset'>
         <Link to="https://www.facebook.com/profile.php?id=100079062128605"><MDBIcon fab icon="facebook-f" /></Link>
          </a>
          <a   className='me-4 text-reset'>
          <Link to="https://twitter.com/ashishbhargav03"><MDBIcon  fab icon="twitter" /></Link>
          </a>
          <a className='me-4 text-reset'>
          <Link to="mailto:ashishcsemitrc2020@gmail.com"><MDBIcon icon="envelope"  /></Link>
          </a>
          <a  className='me-4 text-reset'>
          <Link to="https://www.instagram.com/the_mayur_bhargava/"><MDBIcon fab icon="instagram" /></Link>
          </a>
          <a className='me-4 text-reset'>
          <Link to="https://www.linkedin.com/in/mayur-bhargava-b643861b1/"><MDBIcon fab icon="linkedin" /></Link>
          </a>
          <a className='me-4 text-reset'>
          <Link to="https://github.com/mayur-bhargav"><MDBIcon fab icon="github" /></Link>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon  className="me-3" />
                {/* <img src={Logo} height="auto" width="300px" style={{ margin: "-7rem" }} alt="magva logo" /> */}
              </h6>
              <p>
                To Provide Best User Experiences and
                Best Quality Products.

              </p>
              <p>The e-commerce website could also
                offer sustainable Product</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About us</h6>
              <p>
              <Link to ="/careers"><a   className='text-reset'>
                  Careers

                </a></Link>
              </p>
              <p>
              <Link to ="/ourstore"><a  className='text-reset'>
                  Our Stores

                </a></Link>
              </p>
              <p>
                <Link to ="/ourcares"><a  className='text-reset'>
                  Our Cares

                </a></Link>
              </p>
              <p>
                <a href='/terms'>        
                <li >

                  Term's and Condition
                </li></a>
                </p>
                <p>
                <a href='/privacy'>
                <li >

                  Privacy Policy
                </li></a></p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Customer Care</h6>
              <p>
               <Link to="/help" ><a className='text-reset'>
                  Help Centre
                </a></Link>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  How to Buy
                </a>
              </p>
              <p>
                <Link to="/track">
                <a href='#!' className='text-reset'>
                  Track Your Order

                </a>
                </Link>
              </p>
              <p>
                <Link to="/coprate"><a  className='text-reset'>
                  Corporate & Bulk Purchasing

                </a></Link>
              </p>
              <p>
                <Link to= "/return"><a  className='text-reset'>
                Returns & Refunds
                </a></Link>
              </p>
            </MDBCol>


            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                <a href='https://goo.gl/maps/gyToMj9rvUiCzSkV9'>Inside Delhi Gate
                Near Jain Despensery Bhargava Bhwan

                Alwar ,Rajasthan, India.</a>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Email: <a  href='mailto:mayurbhargava026@gmail.com'>mayurbhargava026@gmail.com</a>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Email: <a  href='mailto:ashishcsemitrc2020@gmail.com'>ashishcsemitrc2020@gmail.com</a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                <a href="https://wa.me/+918619365849">+91-8619365849</a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                <a href="https://wa.me/+918949859527"> +91-8949859527</a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: "black" }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='#'>
          MAGVA.com
        </a>
      </div>
    </MDBFooter>


  );
}