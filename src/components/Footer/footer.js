import React from 'react';
import Logo from "../../assets/logo.png"
import "../Footer/footer.css"
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
    

    <MDBFooter className='text-center text-lg-start text-muted' style={{ margin: "auto", marginTop: "30%", backgroundColor: '#7286D3' }}>
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
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon  className="me-3" />
                <img src={Logo} height="auto" width="300px" style={{ margin: "-7rem" }} alt="magva logo" />
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
                <a href='#!' className='text-reset'>
                  Careers

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Our Stores

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Our Cares

                </a>
              </p>
              <ul>
               <Link to='/terms'> <li>

                  Term's and Condition
                </li></Link>
                <Link to='/privacy'> <li>

                  Privacy Policy
                </li></Link>
              </ul>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Customer Care</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Help Centre
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  How to Buy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Track Your Order

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Corporate & Bulk Purchasing

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Returns & Refunds
                </a>
              </p>
            </MDBCol>


            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Inside Delhi Gate
                Near Jain Despensery Bhargava Bhwan

                Alwar ,Rajasthan, India.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Email: mayurbhargava026@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                +91-8619365849
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91-8949859527
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: "black" }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='#'>
          MAGVAA.com
        </a>
      </div>
    </MDBFooter>


  );
}