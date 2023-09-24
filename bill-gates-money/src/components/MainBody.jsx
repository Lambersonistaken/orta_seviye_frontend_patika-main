import { useState } from "react";
import "./Main.css";

function MainBody() {
  const [money, setMoney] = useState("$100,000,000,000");

  return (
    <div className="main">
      <div className="money_count">
        <h1>{money}</h1>
      </div>

      <div className="grid_container">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
    </div>
  );
}

export default MainBody;
