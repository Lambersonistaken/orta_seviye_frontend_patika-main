import { useState } from "react";
import { addTodoAsync } from "../redux/Todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const isLoading = useSelector((state) => state.todos.addNewTodoIsLoading);
  const error = useSelector((state) => state.todos.addNewTodoError);

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
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        disabled={isLoading}
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </form>
  );
}

export default Form;
