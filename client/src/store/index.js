import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  cartReducer,
  redirectReducer,
  layoutReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    redirect: redirectReducer,
    layout: layoutReducer,
  },
  devTools: true,
});
