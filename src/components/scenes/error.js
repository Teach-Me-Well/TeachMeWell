import 'bootstrap/dist/css/bootstrap.min.css';
import "../../redux/cssfile/main.css"

import Logo from "../../assets/logo.png"
import Error1 from "../../assets/error1.png"
import { Link } from 'react-router-dom';

function Error () {
    return (    
        <>
    <nav className="navbar" style={{backgroundColor:"#8ea7e9", marginTop:"-2rem"}}>
    <a className="navbar-brand mx-auto " href="#">
    <Link to="/">
    <img src={Logo} height="auto" width="303px" style={{ margin: "-7rem" }} alt="magva logo" />
    </Link>
            </a>
            
</nav>
  <div className='err'>
<Link to="/">
    <img  className="err1"src={Error1} alt="magva error1" align="middle" />
    </Link>
    </div>

    <div>
    <h3 style={{textAlign:"center"}}><b>Order not found</b></h3>
    <h4 style={{textAlign:"center"}}>Don't worry your order is in process come back and check again</h4>

    </div>
    <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            className="gradient-custom-7 my-3"
                          >
                            Continue Shopping
                          </button>
                        </div>
          
 

 </> 

  )

    }
    export default Error;