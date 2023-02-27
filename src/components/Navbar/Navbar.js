import 'bootstrap/dist/css/bootstrap.min.css';
import "../Navbar/navbar.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light ">

        <a class="navbar-brand pl-2" href="#">
          <img src={Logo} height="auto" width="161px" style={{ margin: "-3rem" }} alt="magva logo" />
        </a>
    

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <form class="form-inline px-lg-5">
          <div class="input-group">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                All
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <a class="dropdown-item" href="#">All</a>
                <a class="dropdown-item" href="#">Smartphone</a>
                <a class="dropdown-item" href="#">Kitchen Hardware</a>
                <a class="dropdown-item" href="#">Prime Deals</a>
                <a class="dropdown-item" href="#">Book</a>
              </ul>
            </div>      <input type="text" class="form-control" placeholder="Search On MAGVAA..." size="50" aria-label="Username" aria-describedby="basic-addon1" />
            <div class="input-group-append">
              <button type="submit" class="btn btn-warning">
                <i class="fas fa-search"></i>
              </button>
            </div>

          </div>

        </form>
    




        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">

            <li class="nav-item dropdown px-2">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-user"></i> Sign in or Create Account
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <div class="dropdown-menu px-3" aria-labelledby="userAccount"> */}
                <div class="d-flex flex-column justify-content-center">
                  <a href="#" class="btn btn-warning w-75 btn-sm font-weight-bold">Signin/Sign up</a>
                  <small>New customer?<a href="#"> Start here.</a></small>
                </div>
              </ul>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"> <i class="fa-solid fa-cart-shopping"></i> Shopping Cart</a>
            </li>
          </ul>

        </div>
      </nav>
    </>

  );
}

export default navbar;