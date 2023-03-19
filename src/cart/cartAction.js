const ADD_TO_CART = "ADD_TO_CART";

const DELETE_FROM_CART = "DELETE_FROM_CART";

export const addToCart = (data,productData,props) => {
  return {
    type: ADD_TO_CART,

    payload: data,productData,props
   
  };
};

export const deleteFromCart = (data,productData,props) => {
  return {
    type: DELETE_FROM_CART,

    payload: data,productData,props
  };
};