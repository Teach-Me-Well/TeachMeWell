import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../redux/cssfile/main.css"
import { Link } from "react-router-dom";
import { deleteFromCart } from "../../redux/cart/cartAction";
import Logo from "../../assets/logo.png";
import Load from "../../assets/load.png";

const CartItems = () => {
  const state = useSelector((state) => state.cartReducer);
  console.log(state);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    console.log(id);
    dispatch(deleteFromCart(id));
  };
  const subTotal = state.cartData.reduce(
    (accumulator, current) => accumulator + current.items.price,
    0
  );
  const subTotal1 = subTotal + 50
  console.log(subTotal);

  return (
    <React.Fragment>
      {" "}
      {state.cartData.length > 0 ? (
        <div className="head8">
          <nav className="navbar" style={{ backgroundColor: "#8ea7e9", marginTop: "-2rem" }}>
            <a className="navbar-brand mx-auto " href="#">
              <Link to="/">
                <img src={Logo} height="auto" width="303px" style={{ margin: "-7rem" }} alt="magva logo" />
              </Link>
            </a>
          </nav>
          <section class="h-100" style={{ backgroundColor: "#eee" }}>

            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-10">

                <div class="d-flex justify-content-between align-items-center mb-4">
                  <h3 class="fw-normal mb-0 text-black mx-auto" style={{ fontFamily: "monospace", fontSize: "40px" }}>Cart Summary</h3>

                </div>
              </div>
            </div>
          </section>

          {state.cartData.map((value) => {
            console.log(value);
            return (
              <>

                <section class="h-100" style={{ backgroundColor: "#eee" }}>
                  <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                      <div class="col-10">



                        <div class="card rounded-3 mb-4">
                          <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                              <div class="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={value.items.url}
                                  class="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-3">
                                <p class="lead fw-normal mb-2">{value.items.name}</p>
                              </div>
                              <div class="col-lg-4 col-xl-3">
                                <div class="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                                  <p class="mb-2">Price: {value.items.price} Rs. </p>

                                </div>
                              </div>




                              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" onClick={() => deleteItem(value.items.id)} class="gradient-custom-5" >Remove</a>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </section>



              </>
            );
          })}
          <section class="h-100 h-custom">
            <div class="container h-100 py-5">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">


                  <div class="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: "16px" }}>
                    <div class="card-body p-4">

                      <div class="row">
                        <div class="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                          <form>
                            <div class="d-flex flex-row pb-3">
                              <div class="d-flex align-items-center pe-2">
                                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1v"
                                  value="" aria-label="..." checked />
                              </div>
                              <div class="rounded border w-100 p-3">
                                <p class="d-flex align-items-center mb-0">
                                  <i class="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>Credit
                                  Card
                                </p>
                              </div>
                            </div>
                            <div class="d-flex flex-row pb-3">
                              <div class="d-flex align-items-center pe-2">
                                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2v"
                                  value="" aria-label="..." />
                              </div>
                              <div class="rounded border w-100 p-3">
                                <p class="d-flex align-items-center mb-0">
                                  <i class="fab fa-cc-visa fa-2x fa-lg text-dark pe-2"></i>Debit Card
                                </p>
                              </div>
                            </div>
                            <div class="d-flex flex-row">
                              <div class="d-flex align-items-center pe-2">
                                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3v"
                                  value="" aria-label="..." />
                              </div>
                              <div class="rounded border w-100 p-3">
                                <p class="d-flex align-items-center mb-0">
                                  <i class="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2"></i>PayPal
                                </p>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-6">
                          <div class="row">
                            <div class="col-12 col-xl-6">
                              <div class="form-outline mb-4 mb-xl-5">
                                <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                  placeholder="John Smith" />
                                <label class="form-label" for="typeName">Name on card</label>
                              </div>

                              <div class="form-outline mb-4 mb-xl-5">
                                <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="MM/YY"
                                  size="7" minlength="7" maxlength="7" />
                                <label class="form-label" for="typeExp">Expiration</label>
                              </div>
                            </div>
                            <div class="col-12 col-xl-6">
                              <div class="form-outline mb-4 mb-xl-5">
                                <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                  placeholder="1111 2222 3333 4444" minlength="19" maxlength="19" />
                                <label class="form-label" for="typeText">Card Number</label>
                              </div>

                              <div class="form-outline mb-4 mb-xl-5">
                                <input type="password" id="typeText" class="form-control form-control-lg"
                                  placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                <label class="form-label" for="typeText">Cvv</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-xl-3">
                          <div class="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                            <p class="mb-2">Subtotal</p>
                            <p class="mb-2">{subTotal}RS </p>
                          </div>

                          <div class="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                            <p class="mb-0">Shipping</p>
                            <p class="mb-0">50 Rs.</p>
                          </div>


                          <div class="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                            <p class="mb-2">Total (tax included)</p>
                            <p class="mb-2">{subTotal1} Rs.</p>
                          </div>
                          <hr class="my-4" />
                          <div class="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                            <p class="mb-2">Summary</p>
                            <p class="mb-2">{subTotal1}Rs.</p>
                          </div>

                          <button type="button" class="gradient-custom-2">
                            <div class="d-flex justify-content-between">
                              <span>Checkout</span>
                            </div>
                          </button>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>



        </div>
      ) : (
        <section style={{ overflow: "hidden" }}>
          {/* // <section className="h-212 gradient-form w-100" style={{backgroundColor:"#eee", overflow:"hidden"}}> */}
          <div className="container mx-auto px-auto py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-6">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          <img
                            src={Logo}
                            style={{ width: "303px", margin: "-103px" }}
                            alt="logo"
                          />
                          <img src={Load} alt="logo" style={{ width: "-webkit-fill-available" }} />
                          <h4
                            className="mt-1 mb-5 pb-1"
                            style={{
                              fontSize: "30px",
                              fontWeight: "700",
                            }}
                          >OOPS!</h4>
                        </div>

                        <form>
                          <p className="text-center">
                            Your cart is empty please add products to Continue
                          </p>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <Link to="/">
                              <button
                                className="gradient-custom-2 my-1"
                                type="button"
                              >
                                Continue Shopping
                              </button>
                            </Link>
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
      )}{" "}
    </React.Fragment>
  );
};
export default CartItems;