import { useState } from "react";
import { addTodo } from "../redux/Todos/todosSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    if (!title) return alert("Please enter a todo");
    e.preventDefault();
    console.log(title);
    dispatch(
      addTodo({
        id: nanoid(),
        title,
        completed: false,
      })
    );

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default Form;
