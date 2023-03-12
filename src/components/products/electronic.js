import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-service";
import { onAuthStateChanged } from "firebase/auth";
import "../../redux/cssfile/main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./product2";
import { productData, responsive } from "./data2";
import { productData1 } from "./data2";
import { productData2 } from "./data2";
import { productData3 } from "./data2";
import { productData4 } from "./data2";
import "../../redux/cssfile/main.css"
import electronics from "../../assets/images/electronics.jpg"
import Electronic from "../../assets/electronic.png"
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
    const state = useSelector((state) => state.cartReducer);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                setIsUserLoggedIn(true);
                console.log("uid", uid);
            } else {
                // User is signed out
                // ...
                setIsUserLoggedIn(false);
                console.log("user is logged out");
            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                //navigate("/");
                console.log("Signed out successfully");
            })
            .catch((error) => {
                // An error happened.
            });
    };
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

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ marginTop: "-2rem" }}>

                <a className="navbar-brand pl-2" href="#">
                    <img src={Logo} height="auto" width="161px" style={{ margin: "-3rem" }} alt="magva logo" />
                </a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i class="fa-solid fa-user"></i>
                </button>
                <form className="form-inline px-lg-5">
                    <div className="input-group">
                        <div className="dropdown">
                            <button className="btn-all dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                                All
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <a className="dropdown-item" href="#">All</a>
                                <a className="dropdown-item" href="#">Smartphone</a>
                                <a className="dropdown-item" href="#">Kitchen Hardware</a>
                                <a className="dropdown-item" href="#">Prime Deals</a>
                                <a className="dropdown-item" href="#">Book</a>
                            </ul>
                        </div>      <input type="text" className="form-control" placeholder="Search On MAGVAA..." size="50" aria-label="Username" aria-describedby="basic-addon1" />
                        <div className="input-group-append" >
                            <button type="submit" className="btn-search">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>

                    </div>

                </form>





                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item dropdown px-2">
                            {isUserLoggedIn ? (

                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa fa-user-circle" aria-hidden="true"></i>     Profile
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Account</a></li>
                                            <li><a class="dropdown-item" href="#">Your Orders</a></li>
                                            <li><Link to="/wishlist"><a class="dropdown-item" >Your Wishlist</a></Link></li>
                                            <li><a class="dropdown-item" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>


                            )






                                : (<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-user"></i> Sign in or Create Account
                                </a>)}
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                {/* <div className="dropdown-menu px-3" aria-labelledby="userAccount"> */}
                                <div className="d-flex flex-column justify-content-center">
                                    <Link to='/login'><a href="#" className="dropdown-item">Sign-in</a></Link>
                                    <hr></hr>
                                    <Link to='/signup'><a href="#" className="dropdown-item">Sign-up</a></Link>



                                </div>
                            </ul>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/cart">  <a className="nav-link disabled" tabindex="-1" aria-disabled="true"> <i class="fa fa-shopping-bag" aria-hidden="true"></i>  Shopping Cart</a></Link>
                        </li>
                    </ul>

                </div>

            </nav>
            <img src={Electronic} class="d-block w-100" alt="Wild Landscape" style={{ height: "430px" }} />
            <div className="App">
                <h2 class="title">Smart Phones</h2>
                <Carousel responsive={responsive}>
                    {product}
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
                                <img src="https://m.media-amazon.com/images/I/91oF9q-jE5L._SL1500_.jpg"
                                    class="card-img-top " alt="Laptop" style={{ height: "400px" }} />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                                        <p class="small text-danger" style={{ cursor: "pointer" }}><i class="fa fa-shopping-bag" aria-hidden="true"></i></p>
                                    </div>

                                    <div class="d-flex justify-content-between mb-3">
                                        <h5 class="mb-0">HP Notebook</h5>
                                        <h5 class="text-dark mb-0">Rs.1,34,231</h5>
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
                                <img src="https://m.media-amazon.com/images/I/41Kk-2FbJuL.jpg"
                                    class="card-img-top" alt="Laptop" style={{ height: "400px" }} />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                                        <p class="small text-danger" style={{ cursor: "pointer" }}><i class="fa fa-shopping-bag" aria-hidden="true"></i></p>
                                    </div>

                                    <div class="d-flex justify-content-between mb-3">
                                        <h5 class="mb-0">HP Envy</h5>
                                        <h5 class="text-dark mb-0">Rs.1,20,000</h5>
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
                                <img src="https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg"
                                    class="card-img-top" alt="Gaming Laptop" style={{ height: "400px" }} />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                                        <p class="small text-danger" style={{ cursor: "pointer" }}><i class="fa fa-shopping-bag" aria-hidden="true"></i></p>
                                    </div>

                                    <div class="d-flex justify-content-between mb-3">
                                        <h5 class="mb-0">Lenovo7</h5>
                                        <h5 class="text-dark mb-0">Rs.30,000</h5>
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
                <h2 class="title">Smart Watches</h2>
                <Carousel responsive={responsive}>
                    {product1}
                </Carousel>
            </div>
            <div className="App">
                <h2 class="title">Smart TV</h2>
                <Carousel responsive={responsive}>
                    {product2}
                </Carousel>
            </div>
            <section style={{ backgroundColor: "#eee" }}>
                <div class="container py-5">
                    <h2 class="title">Product listing</h2>

                    <div class="row">
                        <div class="col-lg-4 col-md-12 mb-4">
                            <div class="bg-image">
                                <img src="https://th.bing.com/th/id/OIP.azugieZifXjYqtyuBfh8ogHaE8?pid=ImgDet&rs=1"
                                    class="w-100" />
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">WASING MACHINE</span></h5>
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
                                <img src="https://images.news18.com/ibnlive/uploads/2020/12/1608104013_xiaomi_mi_qled_tv_4k.jpg"
                                    class="w-100 " />
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">SMART TV</span></h5>
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
                                <img src="https://www.appleworld.today/wp-content/uploads/2021/09/iPhone-13-mini.jpg"
                                    class="w-100" />
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">SMART PHONE</span></h5>
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
                                <img src={electronics}
                                    class="w-100" />
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">REFRIGERATOR</span></h5>
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
                                <img src="https://i5.walmartimages.com/asr/e3ced41b-70f0-4afa-813a-6aa923980501_2.0388a3cf5a00012a75f3d3898a4d1062.jpeg"
                                    class="w-100" />
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">LAPTOP</span></h5>
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
                                <img src="https://th.bing.com/th/id/OIP.ZKJxfA_xxVygV0kbKEWU9wHaE8?pid=ImgDet&rs=1"
                                    class="w-100" style={{ height: "362px" }} />
                                <a href="#!">
                                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                        <div class="d-flex justify-content-start align-items-start h-100">
                                            <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">AC</span></h5>
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
                <h2 class="title">Laptop</h2>
                <Carousel responsive={responsive}>
                    {product3}
                </Carousel>
            </div>
            <div className="App">
                <h2 class="title">AC</h2>
                <Carousel responsive={responsive}>
                    {product4}
                </Carousel>
            </div>
            <MDBFooter className='text-center text-lg-start text-muted' style={{ margin: "auto", marginTop: "10%", backgroundColor: '#7286D3' }}>
                <div className='text-center p-4' style={{ backgroundColor: '#8EA7E9', color: "black", fontSize: "23px" }}>
                    <a className='text-reset fw-bold' href='#'>
                        Back To Top <i class="fas fa-angle-double-up"></i>
                    </a>
                </div>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a className='me-4 text-reset'>
                            <Link to="https://www.facebook.com/profile.php?id=100079062128605"><MDBIcon fab icon="facebook-f" /></Link>
                        </a>
                        <a className='me-4 text-reset'>
                            <Link to="https://twitter.com/ashishbhargav03"><MDBIcon fab icon="twitter" /></Link>
                        </a>
                        <a className='me-4 text-reset'>
                            <Link to="mailto:ashishcsemitrc2020@gmail.com"><MDBIcon fab icon="google" /></Link>
                        </a>
                        <a className='me-4 text-reset'>
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
                                    <MDBIcon className="me-3" />
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
                                    <Link to="/careers"><a className='text-reset'>
                                        Careers

                                    </a></Link>
                                </p>
                                <p>
                                    <Link to="/ourstore"><a className='text-reset'>
                                        Our Stores

                                    </a></Link>
                                </p>
                                <p>
                                    <Link to="/ourcares"><a className='text-reset'>
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
                                    <Link to="/coprate"><a className='text-reset'>
                                        Corporate & Bulk Purchasing

                                    </a></Link>
                                </p>
                                <p>
                                    <Link to="/return"><a className='text-reset'>
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
                                    Email: <a href='mailto:mayurbhargava026@gmail.com'>mayurbhargava026@gmail.com</a>
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    Email: <a href='mailto:ashishcsemitrc2020@gmail.com'>ashishcsemitrc2020@gmail.com</a>
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
