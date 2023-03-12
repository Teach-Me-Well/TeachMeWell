import React from 'react'
import Logo from "../../assets/logo.png"
import "../../redux/cssfile/main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom'
import Friday from "../../assets/friday.jpg"
import "../../redux/cssfile/main.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./product3";
import { productData, responsive } from "./data3";
import { productData1 } from "./data3";
import { productData2 } from "./data3";
import { productData3 } from "./data3";
import { productData4 } from "./data3";
import { productData5 } from "./data3";
import { productData6 } from "./data3";
import jeans from "../../assets/images/jeans.jpg"
import "../../redux/cssfile/main.css"
import Men from "../../assets/mens.png"
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
export default function App() {
    const product = productData.map((item) => (
        <Product
            name={item.name}
            url={item.cover}
            price={item.price}
            description={item.description}
            description1={item.description1}

        />
    ));
    const product1 = productData1.map((item) => (
        <Product
            name={item.name}
            url={item.cover}
            price={item.price}
            description={item.description}
            description1={item.description1}

        />

    ));
    const product2 = productData2.map((item) => (
        <Product
            name={item.name}
            url={item.cover}
            price={item.price}
            description={item.description}
            description1={item.description1}

        />

    ));
    const product3 = productData3.map((item) => (
        <Product
            name={item.name}
            url={item.cover}
            price={item.price}
            description={item.description}
            description1={item.description1}

        />

    ));
    const product4 = productData4.map((item) => (
        <Product
            name={item.name}
            url={item.cover}
            price={item.price}
            description={item.description}
            description1={item.description1}

        />

    ));
    const product5 = productData5.map((item) => (
        <Product
            name={item.name}
            url={item.cover}
            price={item.price}
            description={item.description}
            description1={item.description1}

        />

    ));  
     const product6 = productData6.map((item) => (
        <Product
            name={item.name}
            url={item.cover}
            price={item.price}
            description={item.description}
            description1={item.description1}

        />

    ));
    return (
        <>
            <nav className="navbar" style={{ backgroundColor: "#8ea7e9", marginTop: "-2rem" }}>
                <a className="navbar-brand mx-auto " href="#">
                    <Link to="/">
                        <img src={Logo} height="auto" width="303px" style={{ margin: "-7rem" }} alt="magva logo" />
                    </Link>
                </a>
            </nav>
            <img src={Men} class="d-block w-100" alt="Wild Landscape" />
            <div className="App">
                <h2 class="title">T-Shirts</h2>
                <Carousel responsive={responsive}>
                    {product}
                </Carousel>
            </div>
            <div className="App">
                <h2 class="title">Shirts</h2>
                <Carousel responsive={responsive}>
                    {product1}
                </Carousel>
            </div>
            <section style={{ backgroundColor: "#eee" }}>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                            <div class="card">
                                <div class="d-flex justify-content-between p-3">
                                    <p class="lead mb-0">Today's  Offer</p>

                                </div>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71kmMYdoPEL._UL1500_.jpg"
                                    class="card-img-top " alt="Laptop" style={{ height: "400px" }} />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="small"><a href="#!" class="text-muted">Shoes</a></p>
                                        <p class="small text-danger" style={{ cursor: "pointer" }}><i class="fa fa-shopping-bag" aria-hidden="true"></i></p>
                                    </div>

                                    <div class="d-flex justify-content-between mb-3">
                                        <h5 class="mb-0">Red Tape Shoes </h5>
                                        <h5 class="text-dark mb-0">1500 Rs.</h5>
                                    </div>

                                    <div class="d-flex justify-content-between mb-2">
                                        <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
                                        <div class="ms-auto text-warning">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                            <div class="card">
                                <div class="d-flex justify-content-between p-3">
                                    <p class="lead mb-0">Today's Offer</p>

                                </div>
                                <img src={jeans}
                                    class="card-img-top" alt="Laptop" style={{ height: "400px" }} />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="small"><a href="#!" class="text-muted">Jeans</a></p>
                                        <p class="small text-danger" style={{ cursor: "pointer" }}><i class="fa fa-shopping-bag" aria-hidden="true"></i></p>
                                    </div>

                                    <div class="d-flex justify-content-between mb-3">
                                        <h5 class="mb-0">Pepe Jeans</h5>
                                        <h5 class="text-dark mb-0">3500 Rs.</h5>
                                    </div>

                                    <div class="d-flex justify-content-between mb-2">
                                        <p class="text-muted mb-0">Available: <span class="fw-bold">7</span></p>
                                        <div class="ms-auto text-warning">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                            <div class="card">
                                <div class="d-flex justify-content-between p-3">
                                    <p class="lead mb-0">Today's Offer</p>

                                </div>
                                <img src="https://image1.superdry.com/static/images/optimised/zoom/upload9223368955665340631.jpg"
                                    class="card-img-top" alt="Gaming Laptop" style={{ height: "400px" }} />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="small"><a href="#!" class="text-muted">Shirt</a></p>
                                        <p class="small text-danger" style={{ cursor: "pointer" }}><i class="fa fa-shopping-bag" aria-hidden="true"></i></p>
                                    </div>

                                    <div class="d-flex justify-content-between mb-3">
                                        <h5 class="mb-0">Shirt</h5>
                                        <h5 class="text-dark mb-0">2500 Rs.</h5>
                                    </div>

                                    <div class="d-flex justify-content-between mb-2">
                                        <p class="text-muted mb-0">Available: <span class="fw-bold">5</span></p>
                                        <div class="ms-auto text-warning">
                                            <i class="fa fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            <div className="App">
                <h2 class="title">Jeans</h2>
                <Carousel responsive={responsive}>
                    {product2}
                </Carousel>
            </div>
            <div className="App">
                <h2 class="title">Track Suit</h2>
                <Carousel responsive={responsive}>
                    {product3}
                </Carousel>
            </div>
            <section style={{ backgroundColor: "#eee" }}>
                <div class="container py-5">
                    <h2 class="title">Product listing</h2>

                    <div class="row">
                        <div class="col-lg-4 col-md-12 mb-4">
                            <div class="bg-image">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71FFbaB7NQL._UY695_.jpg"
                                    class="w-100" style={{height:"335px"}}/>
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Sport's Shoes</span></h5>
                                        </div>
                                    </div>
                                    <div class="hover-overlay">
                                        <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="bg-image ">
                                <img src="https://i.pinimg.com/originals/ad/39/fe/ad39fec93398258460a5bcdc273ef71a.jpg"
                                    class="w-100 " style={{height:"335px"}} />
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Jacket</span></h5>
                                        </div>
                                    </div>
                                    <div class="hover-overlay">
                                        <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="bg-image ">
                                <img src="https://th.bing.com/th/id/OIP.rActuPGGA2b4kRHALlDLpQHaHa?pid=ImgDet&w=750&h=750&rs=1"
                                    class="w-100" style={{height:"335px"}}/>
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">T-Shirts</span></h5>
                                        </div>
                                    </div>
                                    <div class="hover-overlay">
                                        <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-12 mb-4">
                            <div class="bg-image ">
                                <img src="https://n4.sdlcdn.com/imgs/c/v/c/Nifty-Light-Blue-Denim-Jeans-SDL605635622-1-32c5a.jpg"
                                    class="w-100" style={{height:"361px"}}/>
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Jeans</span></h5>
                                        </div>
                                    </div>
                                    <div class="hover-overlay">
                                        <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="bg-image ">
                                <img src="https://cdn.shopify.com/s/files/1/0094/6326/7379/products/5203_4_720x.jpg?v=1663837030"
                                    class="w-100" style={{height:"361px"}}/>
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Shirts</span></h5>
                                        </div>
                                    </div>
                                    <div class="hover-overlay">
                                        <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="bg-image ">
                                <img src="https://i5.walmartimages.com/asr/d3e4547a-9246-472c-b7c1-16db8f376a9a_1.223bdef67663b2e53a49654c46f4c142.jpeg"
                                    class="w-100" style={{height:"362px"}} />
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Trousers</span></h5>
                                        </div>
                                    </div>
                                    <div class="hover-overlay">
                                        <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <div className="App">
                <h2 class="title">Slippers</h2>
                <Carousel responsive={responsive}>
                    {product4}
                </Carousel>
            </div>
            <div className="App">
                <h2 class="title">Sport's Shoes</h2>
                <Carousel responsive={responsive}>
                    {product5}
                </Carousel>
            </div>
            <div className="App">
                <h2 class="title">Jackets</h2>
                <Carousel responsive={responsive}>
                    {product6}
                </Carousel>
            </div>
            <MDBFooter className='text-center text-lg-start text-muted' style={{ margin: "auto", marginTop: "7%", backgroundColor: '#7286D3' }}>
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
          <Link to="mailto:ashishcsemitrc2020@gmail.com"><MDBIcon fab icon="google" /></Link>
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

        </>

    )
}
