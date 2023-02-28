import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartAction";
// import { height } from "@mui/system";
// import zIndex from "@mui/material/styles/zIndex";
// import { Link } from "react-router-dom";
// import { Container, Row, Col } from 'react-grid-system';


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

const FlashCard = ({ Data }) => {
  const [count, setCount] = useState(0);

  const state = useSelector((state) => state.cartReducer.cartData);

  // console.log("This is state", state);

  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const addCartData = (items) => {
    console.log("Add To Cart", items);
    dispatch(addToCart({ items }));
    // console.log("This is state", state);
  };

  return (
    <>

<Slider {...settings}>
        {Data.productItems.map((productItems) => {
          return (
    //  <Container>
    //   <Row>
    //     <Col>
    <div className="svmb-1">
        <div className="container-2">
              <div className="product mtop"></div>
                <div>
                  <img
                    src={productItems.cover}
                    alt=""
                    className="flash"
                    style={{
                      border: "none",
                      borderRadius: "20px",
                      borderRadius: "20px",
                      width: " 329px",
                      height: "187px",
                    }}
                  />
                </div>
                <div className="product-like">
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
                <div className="product-details" style={{ marginLeft: "25px" }}>
                  <span
                    className="discount1"
                    style={{
                      marginLeft: "10px",
                      marginTop: "10px",
                      width: "108px",
                      height: "24px",
                      backgroundColor: "cadetblue",
                      position:"absolute",
                      zIndex:"999"
                    }}
                  >
                     <h1 style={{fontSize:"12px",marginTop:"4px", marginLeft:"10px"}}>UPTO {productItems.discount}% Off</h1>
                  </span>
                  </div>
                  <h1 style={{fontSize:"12px",marginTop:"14px", marginLeft:"156px",color:"red"}}>DEAL OF THE DAY</h1>
                  <div>
                  <h3 style={{marginLeft:"34px" ,marginTop:"11px"}}>{productItems.name}</h3>
                </div>
                <div
                  className="price"
                  style={{height:"3px", marginLeft: "33px",marginTop: "-4px"}}
                >
                  <h4 style={{fontSize:"19px"}}>₹{productItems.price}.00 </h4></div>
                  <div>
                
                  <span
                    className="material-ic"
                    style={{ cursor: "pointer" ,marginLeft:"319px",
                    marginTop: "-37px" ,color:"black",position:"absolute" }}
                    onClick={() => addCartData(productItems)}
                  >
                <span className="material-icons-two-tone">add_shopping_cart</span>  </span>
                     </div>
              </div>
              </div>
    //     </Col>
    //   </Row>
    //  </Container>
           
                
              
          );
        })}
      </Slider>    </>
  );
};

export default FlashCard;
