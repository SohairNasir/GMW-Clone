import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "black",
};

const themeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setTheme: (state, payload) => {
      state.value = payload.payload 
    },
  },
});

export let { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
