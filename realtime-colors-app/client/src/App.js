import "./App.css";
import Palette from "./components/Palette";
import { initiateSocket, subscribe } from "./socketApi";
import { useEffect, useState } from "react";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");

  useEffect(() => {
    initiateSocket();
    subscribe((color) => setActiveColor(color));
  }, []);

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1>{activeColor}</h1>
      <br />
      <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;
