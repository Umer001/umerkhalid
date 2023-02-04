import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  redirect: "",
};

export const slice = createSlice({
  name: "redirect",
  initialState,
  reducers: {
    setRedirect: (state, action) => {
      state.redirect = action.payload;
    },
  },
});

export default slice.reducer;
