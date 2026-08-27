import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "white",
};

const themeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setTheme: (state, argu) => {
      state.value = state.value == "white" ? "black" : "white";
      console.log(argu.payload);
    },
  },
});

export let { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
