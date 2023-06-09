import { useState } from "react";
import "./style.css";

const defaultItems = [
  {
    name: "TODO A",
  },
  {
    name: "TODO B",
  },
  {
    name: "TODO C",
  },
];

function Todo() {
  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("");
  };

  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  return (
    <div>
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li className="todo-item" key={index}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
