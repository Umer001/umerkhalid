import { configureStore } from "@reduxjs/toolkit";
import { authReducer, cartReducer } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  devTools: true,
});
