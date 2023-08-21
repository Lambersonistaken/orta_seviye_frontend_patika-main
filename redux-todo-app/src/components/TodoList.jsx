import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  destroy,
  toggle,
  selectFilteredTodos,
} from "../redux/Todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const filtered = useSelector(selectFilteredTodos);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      dispatch(destroy(id));
    }
  };

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
