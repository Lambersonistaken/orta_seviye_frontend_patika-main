import React from "react";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/Counter/counterSlice";

function Counter() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  //   function handleIncrement() {
  //     dispatch({ type: "counter/increment" });
  //   }

  //   function handleDecrement() {
  //     dispatch({ type: "counter/decrement" });
  //   }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{countValue}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
