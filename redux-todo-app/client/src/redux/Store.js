import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./Todos/todosSlice.js";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
