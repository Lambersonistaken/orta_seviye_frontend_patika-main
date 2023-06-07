import { useState } from "react";
import "./style.css";

function Todo() {
  const [todo, setTodo] = useState([
    { id: 1, title: "todo1" },
    { id: 2, title: "todo2" },
  ]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newTodo = { id: todo.length + 1, title: e.target.value };
      setTodo([...todo, newTodo]);
      e.target.value = ""; // Girdiyi temizle
    }
  };

  const handleDelete = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
      <ul>
        {todo.map((item) => (
          <li className="todo-item" key={item.id}>
            {item.title}
            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
