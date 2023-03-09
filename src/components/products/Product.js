import React, { useState }  from "react";
import { addToCart } from "../../redux/cart/cartAction";
import { useSelector, useDispatch } from "react-redux";
function Product(props) {
  const [count, setCount] = useState(0);

  const state = useSelector((state) => state.cartReducer.cartData);

  // console.log("This is state", state);

  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };
  const addCartData = (items) => {
    console.log("Add To Cart", items);
    dispatch(addToCart({ items }));
    // console.log("This is state", state);
  };
  return (
    <div className="card-1">
      <img className="product--image" src={props.url} alt="product image" />
      <h>{props.name}</h>
      <p className="price">Rs.{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button className="gradient-custom-2" onClick={() => addCartData(props)}>Add to Cart</button>
      </p>
    </div>
  );
}
export default Product