import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // actions, state güncellemek için kullanılır
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // double: (state) => {
    //   state.value *= 2;
    // },
  },
});

export default counterSlice.reducer;
