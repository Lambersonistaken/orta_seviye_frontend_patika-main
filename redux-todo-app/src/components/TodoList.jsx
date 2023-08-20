import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { destroy, toggle } from "../redux/Todos/todosSlice";

let filtered = [];

function TodoList() {
  const todos = useSelector((state) => state.todos.items);
  console.log(todos);
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      dispatch(destroy(id));
    }
  };

  filtered = todos;
  if (activeFilter !== "all") {
    filtered = todos.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false && todo
        : todo.completed === true && todo
    );
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggle({ id: todo.id }))}
            />
            <label>{todo.title}</label>
            <button
              onClick={() => handleDestroy(todo.id)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
