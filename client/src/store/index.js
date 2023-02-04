import { configureStore } from "@reduxjs/toolkit";
import { authReducer, cartReducer, redirectReducer } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    redirect: redirectReducer,
  },
  devTools: true,
});
