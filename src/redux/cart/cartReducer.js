const initialState = {
  cartData: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,

        cartData: [...state.cartData, action.payload],
      };

    case "DELETE_FROM_CART":
      const newData = state.cartData.filter(
        (value) => value.items.id !== action.payload
      );

      console.log(newData);

      return {
        cartData: newData,
      };

    default:
      return state;
  }
};

export default cartReducer;
