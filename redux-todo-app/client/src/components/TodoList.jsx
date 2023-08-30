import { useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredTodos,
  getTodosAsync,
  toggleTodoAsync,
  removeTodoAsync,
} from "../redux/Todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const filtered = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.addNewTodo.isLoading);
  const error = useSelector((state) => state.todos.addNewTodo.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleDestroy = async (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      await dispatch(removeTodoAsync(id));
    }
  };

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
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
              onChange={() => handleToggle(todo.id, todo.completed)}
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
