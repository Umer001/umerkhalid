import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRegisterForm: false,
  customerInfo: {},
  currentUser: {},
  showAuthPop: false,
};

export const slice = createSlice({
  name: "showRegister",
  initialState,
  reducers: {
    setShowRegister: (state, action) => {
      state.showRegisterForm = action.payload;
    },
    setCustomerInfo: (state, action) => {
      state.customerInfo = action.payload;
    },
    setShowAuthPop: (state, action) => {
      state.showAuthPop = action.payload;
    },
    setCurCustomerInfo: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default slice.reducer;
