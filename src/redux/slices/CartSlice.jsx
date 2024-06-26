import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item;
        });
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },

    totalPrice: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, price: item.price * item.qty }
          : item
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  totalPrice,
} = CartSlice.actions;

export default CartSlice.reducer;
