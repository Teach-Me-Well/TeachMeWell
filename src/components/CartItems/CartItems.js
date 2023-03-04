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
          <div className="cart-box">
            {" "}
            <div className="cart-items-data">
              {" "}
              {state.cartData.map((value) => {
                console.log(value);
                return (
                  <div className="cart-items">
                    {" "}
                    <div className="cart-item-image">
                      <img
                        src={value.items.url}
                        alt="not found"
                        style={{
                          width: "105px",
                          height: "67px",
                          marginTop: "-66px",
                          marginLeft: "-19px",
                          position: "absolute",
                        }}
                      />{" "}
                    </div>{" "}
                    <div className="cart-action">
                      {" "}
                      <div className="item-name1">
                        <h2>{value.items.name}</h2>{" "}
                      </div>{" "}
                      <div className="cart-btn10">
                        {" "}
                        <button onClick={() => deleteItem(value.items.id)}>
                          <span class="material-icons">delete</span>
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                );
              })}
            </div>
            <div className="price-box1">
              <h2 style={{ marginLeft: "-110px", marginTop: "-10px" }}>
                cart Summary
              </h2>
              <h6
                style={{
                  marginLeft: "-7px",
                  marginTop: "-5px",
                  fontSize: "14px",
                }}
              >
                Subtotal :
                <h style={{ marginLeft: "147px", position: "fixed" }}>
                  {" "}
                  {subTotal}RS
                </h>
                <p></p>
                shipping charges: <h style={{ marginLeft: "115px" }}>00RS</h>
                <p></p>
                Tax & Service charges:{" "}
                <h style={{ marginLeft: "83px" }}>00RS</h>
                <p></p>
              </h6>
              <div
                style={{
                  width: "260px",
                  height: "1px",
                  backgroundColor: "grey",
                  marginTop: "-40px",
                }}
              >
                <h2 style={{ fontSize: "20px", marginLeft: "-5px" }}>
                  Total charges:
                  <h style={{ marginLeft: "48px" }}> {subTotal}RS</h>
                </h2>
                <Link to="/buy">
                  {" "}
                  <button style={{ marginTop: "324px", marginLeft: "81px" }}>
                    Proceed to Buy
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
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
                          <img src={Load} alt="logo" style={{width:"-webkit-fill-available" }} />
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
