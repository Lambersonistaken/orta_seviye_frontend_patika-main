import { useState } from "react";
import { send } from "../socketApi";

function Palette({ activeColor }) {
  const [color, setColor] = useState("#000");

  return (
    <div className="Palette">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Render</button>
      {color}
    </div>
  );
}

export default Palette;
