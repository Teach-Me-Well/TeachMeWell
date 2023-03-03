import 'bootstrap/dist/css/bootstrap.min.css';
import "../../redux/cssfile/main.css"

import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

function Track () {
    return (
        <>
    <nav className="navbar" style={{backgroundColor:"#8ea7e9", marginTop:"-2rem"}}>
    <a className="navbar-brand mx-auto " href="#">
    <Link to="/">
    <img src={Logo} height="auto" width="303px" style={{ margin: "-7rem" }} alt="magva logo" />
    </Link>
            </a>
            
</nav>

 
 <h2 style={{textAlign:"center",marginTop:"32px"}}><b>TRACK YOUR ORDER</b></h2> 


<form>
  
  <div class="form-group-1 mx-auto col-md-3 justify-content-center">
    <label>Track Order:-</label>
    
    <input type="text" class="form-control-1" placeholder='Track your order' />
    
  </div>
  <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            className="gradient-custom-3 my-3"
                          >
                            <Link to="/error"> Track</Link>
                          </button>
                        </div></form>

 </> 

  )

    }
    export default Track;