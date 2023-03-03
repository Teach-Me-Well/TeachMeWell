import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../redux/cssfile/main.css"
import { useSelector } from "react-redux";
import Logo from "../../assets/logo.png"
import { Link,useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-service";
import { onAuthStateChanged } from "firebase/auth";
// import Cart from "../src/components/CartItems/CartItems";
const Navbar = () => {
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
 
  return (
    <>
      <nav className="navbar absolute-top navbar-expand-lg navbar-light ">

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
              <i className="fa-solid fa-user"></i>    Profile
              </a>
              <ul class="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Account</a></li>
                <li><a class="dropdown-item" href="#">Your Orders</a></li>
                <li><Link to ="/wishlist"><a class="dropdown-item" >Your Wishlist</a></Link></li>
                <li><a class="dropdown-item" style={{cursor:"pointer"}} onClick={handleLogout}>Logout</a></li>
              </ul>
            </li>
          </ul>
        
             
        )
        
   
       

       
       
       : (<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i> Sign in or Create Account
              </a> )}
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
            <Link to="/cart">  <a className="nav-link disabled" tabindex="-1" aria-disabled="true"> <i className="fa-solid fa-cart-shopping"></i> Shopping Cart</a></Link>
            </li>
          </ul>

        </div>
        
      </nav>
      
</>
  );
}

export default Navbar;