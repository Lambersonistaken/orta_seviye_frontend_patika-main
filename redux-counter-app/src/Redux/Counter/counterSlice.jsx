import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // actions, state güncellemek için kullanılır
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    double: (state) => {
      state.value *= 2;
    },
    zero: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      // action payload ile gelen değeri alır
      state.value += Number(action.payload); // ???
    },
  },
});

export const { increment, decrement, double, zero, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
