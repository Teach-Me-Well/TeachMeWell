import React from 'react'
import Logo from "../../assets/logo.png"
import "../Signup/signup.css"
export default function signup() {
  return (
    <>
    <section style={{ overflow: "hidden" }}>
        <div className="container py-5 h-100 w-100">
          <div className="row d-flex justify-content-center align-items-center h-100 mx-auto">
            <div className="col-xl-6">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="">
                    <div className="card-body p-md-5 mx-md-4">
      
                      <div className="text-center">
                      <img src={Logo}
                        style={{ width: "303px", margin: "-103px" }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1" style={{
                        fontSize: "30px",
                        fontWeight: "700"
                      }}>Welcome To MAGVA...</h4>
                      </div>
      
                      <form>
                        <p>Please login to your account</p>
      
                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example11" className="form-control"
                            placeholder="Phone number or email address" />
                          <label className="form-label" for="form2Example11">Username</label>
                        </div>
      
                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example22" className="form-control" />
                          <label className="form-label" for="form2Example22">Password</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example22" className="form-control" placeholder="Confirm your password" />
                            <label className="form-label" for="form2Example22" >Password</label>
                          </div>
      
                        <div className="text-center pt-1 mb-5 pb-1">
                            <div className="form-check d-flex justify-content-center mb-5">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                <label className="form-check-label" for="form2Example3g">
                                  I agree all statements in <a href="#!" className="text-body"><a href='/terms'><u>Terms of service</u></a></a>
                                </label>
                              </div>
              
                             
                                <div className="d-flex justify-content-center">
                                    <button type="button"
                                      className=" gradient-custom-4 ">Register</button>
                                
                             </div>
                             {/* <br></br> */}
                             <div className="d-flex justify-content-center text-center mt-4 pt-1">
                           <div className="logo-1">
                            <a href="#" className="text-black"><i className="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#" className="text-black"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                            <a href="#" className="text-black"><i className="fab fa-google fa-lg"></i></a>
                           </div>
                          </div>
              
                         <p className="text-center text-muted mt-5 mb-0">Have already an account? 
                         <a href="/login"
                            className="fw-bold text-body"><u>Login here</u></a></p>
                        </div>
                        
                       
      
                      </form>
      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
