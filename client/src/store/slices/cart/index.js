import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        const tempItem = { ...action.payload, quantity: 1 };
        state.items.push(tempItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decreaseCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      } else if (state.items[itemIndex].quantity === 1) {
        const nextCartItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );

        state.items = nextCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      state.items.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.items.filter(
            (item) => item.id !== cartItem.id
          );

          state.items = nextCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.items));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      state.totalQuantity = quantity;
      state.totalAmount = total;
    },
  },
});
export const { addToCart, getTotals, removeFromCart, decreaseCart } =
  slice.actions;
export default slice.reducer;
