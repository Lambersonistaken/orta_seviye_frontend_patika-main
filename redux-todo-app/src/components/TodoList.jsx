import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, addTodo } from "../redux/Todos/todosSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : "view"}>
          <div>
            <input className="toggle" type="checkbox" />
            <label>{todo.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
