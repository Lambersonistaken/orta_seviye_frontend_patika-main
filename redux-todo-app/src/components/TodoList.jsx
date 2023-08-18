import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/Todos/todosSlice";
function TodoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggle({ id: todo.id }))}
            />
            <label>{todo.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
