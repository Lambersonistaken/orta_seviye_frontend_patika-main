import React from "react";

import { useSelector } from "react-redux";

function Counter() {
  const countValue = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{countValue}</h2>
    </div>
  );
}

export default Counter;
