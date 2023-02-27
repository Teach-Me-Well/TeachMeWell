import 'bootstrap/dist/css/bootstrap.min.css';
import "../Navbar/navbar.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <>
      <nav className="navbar absolute-top navbar-expand-lg navbar-light ">

        <a className="navbar-brand pl-2" href="#">
          <img src={Logo} height="auto" width="161px" style={{ margin: "-3rem" }} alt="magva logo" />
        </a>
    

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
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
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i> Sign in or Create Account
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <div className="dropdown-menu px-3" aria-labelledby="userAccount"> */}
                <div className="d-flex flex-column justify-content-center">
                  <Link to='/login'><a href="#" className="btn-sign w-75 btn-sm font-weight-bold">Signin</a></Link>
                  <a href="#" className="btn-sign w-75 btn-sm font-weight-bold">Signup</a>

                  {/* <small>New customer?<a href="#"> Start here.</a></small> */}
                </div>
              </ul>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"> <i className="fa-solid fa-cart-shopping"></i> Shopping Cart</a>
            </li>
          </ul>

        </div>
        
      </nav>
      
</>
  );
}

export default navbar;