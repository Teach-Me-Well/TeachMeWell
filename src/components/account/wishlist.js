import React from 'react'
import Logo from "../../assets/logo.png"
import "../../redux/cssfile/main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import wishlist1 from "../../assets/wishlist.png"
import { Link,useNavigate } from 'react-router-dom'
const Wishlist = () => {
  const navigate = useNavigate();
    const wishlis = () => {
        navigate("/")
      };
  return (
    <>
<nav className="navbar" style={{backgroundColor:"#8ea7e9", marginTop:"-2rem"}}>
    <a className="navbar-brand mx-auto " href="#">
    <Link to="/">
    <img src={Logo} height="auto" width="303px" style={{ margin: "-7rem" }} alt="magva logo" />
    </Link>
    </a>

</nav>

     
           
             
                
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src={wishlist1}
                        style={{ width: "303px" }}
                        alt="logo"
                      />
                    </div>
                    <form>
                      <p
                      style={{textAlign:"center"}}>your wishlist is curently empty</p>


                      <div className="text-center pt-1 mb-5 pb-1">
                        <a>
                          <button
                            className="gradient-custom-2 my-1"
                            type="button"
                            onClick={wishlis}
                          >
                            continue shoping
                          </button>
                        </a>
                        
                        
                      </div>
                    </form>
                  </div>
            
        
   

</>
  )
}
export default Wishlist;