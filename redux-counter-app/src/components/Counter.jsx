import { useState } from "react";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  double,
  zero,
  incrementByAmount,
} from "../Redux/Counter/counterSlice";

function Counter() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{countValue}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(double())}>*2</button>
      <button onClick={() => dispatch(zero())}>reset</button>
      <br />
      <br />
      <input
        onChange={(e) => setIncrementAmount(e.target.value)}
        type="number"
        value={incrementAmount}
      />
      <button
        style={{ width: "150px" }}
        onClick={() => dispatch(incrementByAmount(incrementAmount))}
      >
        Increment by Amount
      </button>
      <button style={{ width: "100px" }} onClick={() => setIncrementAmount(0)}>
        Reset Value
      </button>
    </div>
  );
}

export default Counter;
