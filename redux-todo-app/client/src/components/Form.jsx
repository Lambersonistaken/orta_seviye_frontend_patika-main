import { useState } from "react";
import { addTodoAsync } from "../redux/Todos/todosSlice";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  async function handleSubmit(e) {
    if (!title) return alert("Please enter a todo");
    e.preventDefault();
    console.log(title);
    await dispatch(
      addTodoAsync({
        title,
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
