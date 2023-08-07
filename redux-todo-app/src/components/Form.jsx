import React from "react";
import { addTodo, deleteTodo, toggleComplete } from "../redux/Todos/todosSlice";

function Form() {
  return (
    <form>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
}

export default Form;
