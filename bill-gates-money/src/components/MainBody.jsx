import { useState } from "react";
import "./Main.css";

function MainBody() {
  const [money, setMoney] = useState("$100,000,000,000");

  let isSpent = false;

  if (money === "$100,000,000,000") {
    isSpent = false;
  } else {
    isSpent = true;
  }

  return (
    <div className="main">
      <div className="money_count">
        <h1>{money}</h1>
      </div>

      <div className="grid_container">
        <div class="grid-item">
          <img src="https://neal.fun/spend/images/big-mac.jpg" alt="" />
          <h3>Big Mac</h3>
          <h2>$2</h2>
          <div className="buttons">
            <div>
              <button className="sell_btn" disabled={!isSpent}>
                Sell
              </button>
            </div>
            <div>
              <button className="buy_btn">Buy</button>
            </div>
          </div>
        </div>

        <div class="grid-item">
          <img src="https://neal.fun/spend/images/flip-flops.jpg" alt="" />
          <h3>Big Mac</h3>
          <h2>$2</h2>
          <div className="buttons">
            <div>
              <button className="sell_btn" disabled={!isSpent}>
                Sell
              </button>
            </div>
            <div>
              <button className="buy_btn">Buy</button>
            </div>
          </div>
        </div>

        <div class="grid-item">
          <img src="https://neal.fun/spend/images/coca-cola-pack.jpg" alt="" />
          <h3>Big Mac</h3>
          <h2>$2</h2>
          <div className="buttons">
            <div>
              <button className="sell_btn" disabled={!isSpent}>
                Sell
              </button>
            </div>
            <div>
              <button className="buy_btn">Buy</button>
            </div>
          </div>
        </div>

        <div class="grid-item">
          <img src="https://neal.fun/spend/images/movie-ticket.jpg" alt="" />
          <h3>Big Mac</h3>
          <h2>$2</h2>
          <div className="buttons">
            <div>
              <button className="sell_btn" disabled={!isSpent}>
                Sell
              </button>
            </div>
            <div>
              <button className="buy_btn">Buy</button>
            </div>
          </div>
        </div>

        <div class="grid-item">
          <img src="https://neal.fun/spend/images/book.jpg" alt="" />
          <h3>Big Mac</h3>
          <h2>$2</h2>
          <div className="buttons">
            <div>
              <button className="sell_btn" disabled={!isSpent}>
                Sell
              </button>
            </div>
            <div>
              <button className="buy_btn">Buy</button>
            </div>
          </div>
        </div>

        <div class="grid-item">
          <img src="https://neal.fun/spend/images/lobster-dinner.jpg" alt="" />
          <h3>Big Mac</h3>
          <h2>$2</h2>
          <div className="buttons">
            <div>
              <button className="sell_btn" disabled={!isSpent}>
                Sell
              </button>
            </div>
            <div>
              <button className="buy_btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
