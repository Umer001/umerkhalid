import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  profileDropdown: false,
};

export const slice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setProfileDropdown: (state, action) => {
      state.profileDropdown = action.payload;
    },
  },
});

export default slice.reducer;
