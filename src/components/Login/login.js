import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/logo.png"
import "../Login/login.css"
export default function login() {
  return (
    <section style={{ overflow: "hidden" }}>
      {/* // <section className="h-212 gradient-form w-100" style={{backgroundColor:"#eee", overflow:"hidden"}}> */}
      <div className="container mx-4 px-auto py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
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

                      <div className="text-center pt-1 mb-5 pb-1">
                        <a href="index1.html"><button className="gradient-custom-2 my-1" type="button">Sign
                          in</button></a>
                        <br></br>
                        <a className="text-muted my-2" href="#!"><u>Forgot password?</u></a>

                      </div>

                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <div className="logo">
                          <a href="#" className="text-black"><i className="fab fa-facebook-f fa-lg"></i></a>
                          <a href="#" className="text-black"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                          <a href="#" className="text-black"><i className="fab fa-google fa-lg"></i></a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                         <a href="/signup"
                            className="fw-bold text-body"><u>Register here</u></a>
                      </div>

                    </form>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // </section> */}
    </section>
  )
}
